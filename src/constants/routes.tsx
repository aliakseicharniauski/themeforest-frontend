import Home from '@pages/Home'
import NotFound from '@pages/NotFound'
import Services from '@pages/Services'
import SignIn from '@pages/SignIn'
import Solutions from '@pages/Solutions'
import Layout from '@сomponents/Layout'
import ProtectedRoute from '@сomponents/ProtectedRoute'
import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'
import { Links } from './types'

export const enum PathURL {
    HOME = '/',
    SERVICES = 'services',
    ABOUT_US = 'about-us',
    BLOG = 'blog',
    CONTACTS = 'contacts',
    TEAM = 'team',
    FAQ = 'faq',
    SOLUTIONS = 'solutions',
    SIGN_IN = 'sign-in',
    NOT_FOUND = '*',
}

export const navLinks: Links = [
    { label: 'Home', path: PathURL.HOME },
    { label: 'Solutions', path: PathURL.SOLUTIONS },
    {
        label: 'Pages',
        path: PathURL.NOT_FOUND,
        links: [
            { label: 'About Us', path: PathURL.ABOUT_US },
            { label: 'FAQs', path: PathURL.FAQ },
        ],
    },
    { label: 'Services', path: PathURL.SERVICES },
    { label: 'Blog', path: PathURL.BLOG },
    { label: 'Contacts', path: PathURL.CONTACTS },
]

const routes = [
    {
        path: PathURL.HOME,
        element: <Home />,
        isAllowed: true,
    },
    {
        path: PathURL.SOLUTIONS,
        element: <Solutions />,
        isAllowed: true,
    },
    {
        path: PathURL.SERVICES,
        element: <Services />,
        isAllowed: true,
    },
    {
        path: PathURL.BLOG,
        element: <Home />,
        isAllowed: true,
    },
    {
        path: PathURL.CONTACTS,
        element: <Home />,
        isAllowed: true,
    },
    {
        path: PathURL.ABOUT_US,
        element: <Home />,
        isAllowed: true,
    },
    {
        path: PathURL.FAQ,
        element: <Home />,
        isAllowed: true,
    },
    {
        path: PathURL.TEAM,
        element: <Home />,
        isAllowed: true, // TODO: change private page
    },
    {
        path: PathURL.NOT_FOUND,
        element: <NotFound />,
        isAllowed: true,
    },
    {
        path: PathURL.SIGN_IN,
        element: <SignIn />,
        isAllowed: true,
    },
]

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route index element={<Home />} />

            {routes.map(({ element, path, isAllowed }) => (
                <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
                    <Route path={path} element={element} />
                </Route>
            ))}
        </Route>
    )
)

export default PathURL
