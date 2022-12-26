import { useEffect, useState } from 'react'
import { defaultDimension, mobileDimension } from './constants'

const useMobile = () => {
    const [windowDimension, setWindowDimension] =
        useState<number>(defaultDimension)

    useEffect(() => {
        setWindowDimension(window.innerWidth)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setWindowDimension(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const isMobile = windowDimension <= mobileDimension

    return isMobile
}

export default useMobile
