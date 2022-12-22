import { ReactNode } from "react"

export type Props = {
    children: ReactNode
    error: string
}

export type State = {
    hasError: boolean
}