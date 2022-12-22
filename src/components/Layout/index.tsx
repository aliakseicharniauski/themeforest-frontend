import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@сomponents/Header'

const Layout: React.FC = () => (
    <>
        <Header />
        {/* TODO: separate styles */}
        <main style={{ padding: '1rem 0' }}>
            <Outlet />
        </main>
        {/* TODO: footer */}
    </>
)

export default Layout
