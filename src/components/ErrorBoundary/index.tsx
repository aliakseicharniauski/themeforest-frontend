import React, { Component, ReactNode } from 'react'
import { Props, State } from './types'

export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.log(error, errorInfo)
        // TODO: add sentry
    }

    render() {
        const { hasError } = this.state
        const { children, error } = this.props

        if (hasError) {
            return <h1>Something went wrong. {error}</h1>
        }

        return children
    }
}
