import React, { ReactElement } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

type ProtectedRouteProps = {
    isAllowed: boolean
    redirectPath?: string
    children?: React.ReactElement
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    isAllowed,
    redirectPath = '/',
    children,
}): ReactElement | null => {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />
    }

    return children || <Outlet />
}

export default ProtectedRoute
