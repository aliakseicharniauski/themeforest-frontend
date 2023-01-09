import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import MenuMobile from '@сomponents/MenuMobile'
import FollowUs from '@сomponents/FollowUs'
import IconMenuClose from '@assets/icons/icon_menu_close.svg'
import IconPlayVideo from '@assets/icons/icon_playvideo.svg'
import IconMenu from '@assets/icons/icon_menu.svg'
import { navLinks } from '@constants/routes'
import useMobile from '@hooks/useMobile'
import {
    DisableBodyScroll,
    HamburgerButton,
    NavbarInnerWrapper,
    NavbarWrapper,
    WatchVideoButton,
    NavbarLogo,
    NavbarFollowUs,
    NavbarMobileItems,
    NavbarItems,
    NavbarItem,
} from './styled'

const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const closeMenu = () => setMenuOpen(false)

    const isMobile = useMobile()

    useEffect(() => {
        closeMenu()
    }, [isMobile])

    return (
        <NavbarWrapper>
            <NavbarInnerWrapper>
                <NavbarLogo />

                {isMobile ? (
                    <>
                        <NavbarMobileItems isMenuOpen={isMenuOpen}>
                            <MenuMobile
                                navigationLinks={navLinks}
                                onClickItem={closeMenu}
                            />
                        </NavbarMobileItems>
                        {isMenuOpen && (
                            <>
                                <DisableBodyScroll />
                                <NavbarFollowUs>
                                    <Typography variant="h6Bold">
                                        Follow us
                                    </Typography>
                                    <FollowUs />
                                </NavbarFollowUs>
                            </>
                        )}
                        <HamburgerButton
                            onClick={() => setMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <IconMenuClose /> : <IconMenu />}
                        </HamburgerButton>
                    </>
                ) : (
                    <>
                        <NavbarItems>
                            {navLinks.map(
                                ({ path, label }) =>
                                    path && (
                                        <NavbarItem to={path} key={path}>
                                            <Typography variant="h8SemiBold">
                                                {label}
                                            </Typography>
                                        </NavbarItem>
                                    )
                            )}
                        </NavbarItems>

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
            </NavbarInnerWrapper>
        </NavbarWrapper>
    )
}

export default Header
