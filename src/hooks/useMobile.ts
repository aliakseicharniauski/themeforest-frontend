import { useEffect, useState } from 'react'

const useMobile = () => {
    const [windowDimension, setWindowDimension] = useState<number>(1920) // TODO: set constants

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

    const isMobile = windowDimension <= 800 // TODO: set constants

    return isMobile
}

export default useMobile
