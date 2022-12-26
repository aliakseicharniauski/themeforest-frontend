import { NavLink } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { Button } from '@mui/material'
import { styled as styledMui } from '@mui/material/styles'
import Logo from '@assets/logo_blue.svg'

export const NavbarMobileItems = styled.div`
    position: fixed;
    top: 5rem;
    bottom: 0;
    right: 0;
    left: 0;
    overflow-x: scroll;
    padding-bottom: 8rem;

    background-color: white; // TODO: theme
    transition: 0.2s ease-out;

    transform: ${({ isMenuOpen }: { isMenuOpen: boolean }) =>
        isMenuOpen ? `translateX(0)` : `translateX(100%)`};
`
export const NavbarMobileItem = styled.div``
export const NavbarFollowUs = styled.div`
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    position: fixed;
    padding: 1rem 1rem 2.5rem 1rem;
    background: white; // TODO: change theme
`
export const NavbarWrapper = styled.header`
    display: flex;
    justify-content: center;
    padding: 2.5rem 0;

    background: #f1f6fa; // TODO: change to theme
    @media only screen and (max-width: 800px) {
        padding: 1.5rem 0;
        background: white; // TODO: change to theme
    }
`
export const NavbarInnerWrapper = styled.nav`
    max-width: 1110px; // TODO: add theme
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-self: flex-start;
    align-items: center;

    @media only screen and (max-width: 800px) {
        background: white; // TODO: change to theme
        width: 100vw;
        padding: 0 1.5rem 0 0;
    }
`
export const NavbarLogo = styled(Logo)`
    @media only screen and (max-width: 800px) {
        scale: 0.65;
    }
`
export const NavbarItems = styled.ul`
    display: flex;
    list-style: none;
`
export const NavbarItem = styled(NavLink)`
    padding: 0 1rem;
    cursor: pointer;
    color: #9497a1; /* TODO: add theme */

    @media only screen and (max-width: 800px) {
        padding: 1rem 0;
    }

    &.active {
        color: #292d33; /* TODO: add theme */
        font-weight: 600;
    }
`

export const HamburgerButton = styled.div`
    display: none;

    @media only screen and (max-width: 800px) {
        display: block;
        cursor: pointer;
        z-index: 10;
    }
`

export const WatchVideoButton = styledMui(Button)`
    text-transform: none;
    color: #FFFFFF; // TODO: add theme
    width: 10.5rem;
    height: 2.75rem;
  `

export const DisableBodyScroll = createGlobalStyle`
    html {
      overflow: hidden;
    }
  `
