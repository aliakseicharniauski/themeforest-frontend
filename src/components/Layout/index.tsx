import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@сomponents/Header'
import MainWrapper from './styled'

const Layout: React.FC = () => (
    <>
        <Header />
        <MainWrapper>
            <Outlet />
        </MainWrapper>
        {/* TODO: footer */}
    </>
)

export default Layout
