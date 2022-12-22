import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import MenuMobile from '@сomponents/MenuMobile'
import FollowUs from '@сomponents/FollowUs'
import IconMenu from '@assets/icon_menu.svg'
import IconMenuClose from '@assets/icon_menu_close.svg'
import IconPlayVideo from '@assets/icon_playvideo.svg'
import {
    DisableBodyScroll,
    HamburgerButton,
    Navbar,
    WatchVideoButton,
} from './styled'

// TODO: separate to routes
const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    {
        name: 'Pages',
        href: '/pages',
        links: [
            { name: 'Services', href: '/services' },
            { name: 'Page2', href: '/page2' },
        ],
    },
    { name: 'Elements', href: '/elements' },
    {
        name: 'Blog',
        href: '/blog',
        links: [
            { name: 'Page3', href: '/page3' },
            { name: 'Page4', href: '/page4' },
        ],
    },
    {
        name: 'Contacts',
        href: '/contacts',
        links: [
            { name: 'Page3', href: '' },
            { name: 'Page4', href: '' },
            { name: 'Page5', href: '' },
            { name: 'Page6', href: '' },
            { name: 'Page7', href: '' },
            { name: 'Page8', href: '' },
            { name: 'Page9', href: '' },
            { name: 'Page10', href: '' },
            { name: 'Page11', href: '' },
        ],
    },
]

const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)

    const [windowDimension, setWindowDimension] = useState<number>(1920)

    useEffect(() => {
        setWindowDimension(window.innerWidth)
    }, [])

    useEffect(() => {
        function handleResize() {
            setWindowDimension(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const isMobile = windowDimension <= 800 // TODO: set constants

    return (
        <Navbar.Wrapper>
            <Navbar.InnerWrapper>
                <Navbar.Logo />

                {isMobile ? (
                    <>
                        {isMenuOpen && <DisableBodyScroll />}

                        <Navbar.MobileItems isMenuOpen={isMenuOpen}>
                            <MenuMobile navigationLinks={navigationLinks} />
                        </Navbar.MobileItems>
                        {isMenuOpen && (
                            <Navbar.FollowUs>
                                <Typography variant="h6Bold">
                                    Follow us
                                </Typography>
                                <FollowUs />
                            </Navbar.FollowUs>
                        )}
                        <HamburgerButton.Wrapper
                            onClick={() => setMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <IconMenuClose width={16.1} height={16.1} />
                            ) : (
                                <IconMenu width={20} height={14} />
                            )}
                        </HamburgerButton.Wrapper>
                    </>
                ) : (
                    <>
                        <Navbar.Items>
                            {navigationLinks.map((link) => (
                                <Navbar.Item to={link.href} key={link.name}>
                                    <Typography variant="h8SemiBold">
                                        {link.name}
                                    </Typography>
                                </Navbar.Item>
                            ))}
                        </Navbar.Items>

                        <WatchVideoButton
                            variant="contained"
                            startIcon={<IconPlayVideo />}
                        >
                            <Typography variant="h7SemiBold">
                                Watch the demo
                            </Typography>
                        </WatchVideoButton>
                    </>
                )}
            </Navbar.InnerWrapper>
        </Navbar.Wrapper>
    )
}

export default Header
