import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { List, ListItemText, Typography } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import IconListItemArrow from '@assets/icon_listitem_arrow.svg'
import { Menu, SubMenu } from './styled'

// TODO: replace to routes, separate types
type NavigationLink = {
    name: string
    href: string
    links?: Array<{ name: string; href: string }>
}

type MenuMobileProps = {
    navigationLinks: Array<NavigationLink>
}

const MenuMobile: React.FC<MenuMobileProps> = ({ navigationLinks }) => {
    const [openId, setOpenId] = React.useState<string | null>(null)

    const handleClick = (id: string | null) => () => {
        setOpenId(openId === id ? null : id)
    }

    return (
        <Menu.Wrapper>
            {navigationLinks.map((link) => (
                <React.Fragment key={link.name}>
                    {link.links ? (
                        <>
                            <Menu.Button onClick={handleClick(link.name)}>
                                <ListItemText
                                    primary={
                                        <Typography variant="h6Bold">
                                            {link.name}
                                        </Typography>
                                    }
                                />
                                {openId === link.name ? (
                                    <ExpandLess />
                                ) : (
                                    <ExpandMore />
                                )}
                            </Menu.Button>
                            <SubMenu.Collapse
                                in={openId === link.name}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List component="div" disablePadding>
                                    {link.links.map((nestedLink) => (
                                        <NavLink
                                            key={nestedLink.name}
                                            to={nestedLink.href}
                                        >
                                            <SubMenu.Button
                                                key={nestedLink.name}
                                            >
                                                <ListItemText
                                                    sx={{ flex: 'none' }}
                                                    primary={
                                                        <Typography variant="h7SemiBold">
                                                            {nestedLink.name}
                                                        </Typography>
                                                    }
                                                />
                                                <SubMenu.Arrow>
                                                    <IconListItemArrow />
                                                </SubMenu.Arrow>
                                            </SubMenu.Button>
                                        </NavLink>
                                    ))}
                                </List>
                            </SubMenu.Collapse>
                        </>
                    ) : (
                        <NavLink to={link.href}>
                            <Menu.Button>
                                <ListItemText
                                    primary={
                                        <Typography variant="h6Bold">
                                            {link.name}
                                        </Typography>
                                    }
                                />
                            </Menu.Button>
                        </NavLink>
                    )}
                    <Menu.Line />
                </React.Fragment>
            ))}
        </Menu.Wrapper>
    )
}

export default MenuMobile
