import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { List, ListItemText, Typography } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import IconListItemArrow from '@assets/icons/icon_listitem_arrow.svg'
import {
    MenuButton,
    MenuLine,
    MenuWrapper,
    SubMenuArrow,
    SubMenuButton,
    SubMenuCollapse,
} from './styled'
import { MenuMobileProps } from './types'

/* TODO: replace to themeforest-library */
const MenuMobile: React.FC<MenuMobileProps> = ({
    navigationLinks,
    onClickItem,
}) => {
    const [openId, setOpenId] = React.useState<string | null>(null)

    const handleClick = (id: string | null) => () => {
        setOpenId(openId === id ? null : id)
    }

    return (
        <MenuWrapper>
            {navigationLinks.map(({ label, path, links }) => (
                <React.Fragment key={label}>
                    {links ? (
                        <>
                            <MenuButton onClick={handleClick(label)}>
                                <ListItemText
                                    primary={
                                        <Typography variant="h6Bold">
                                            {label}
                                        </Typography>
                                    }
                                />
                                {openId === label ? (
                                    <ExpandLess />
                                ) : (
                                    <ExpandMore />
                                )}
                            </MenuButton>
                            <SubMenuCollapse
                                in={openId === label}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List component="div" disablePadding>
                                    {links.map(({ label, path }) => (
                                        <NavLink key={label} to={path}>
                                            <SubMenuButton
                                                onClick={onClickItem}
                                                key={label}
                                            >
                                                <ListItemText
                                                    sx={{ flex: 'none' }}
                                                    primary={
                                                        <Typography variant="h7SemiBold">
                                                            {label}
                                                        </Typography>
                                                    }
                                                />
                                                <SubMenuArrow>
                                                    <IconListItemArrow />
                                                </SubMenuArrow>
                                            </SubMenuButton>
                                        </NavLink>
                                    ))}
                                </List>
                            </SubMenuCollapse>
                        </>
                    ) : (
                        <NavLink to={path}>
                            <MenuButton onClick={onClickItem}>
                                <ListItemText
                                    primary={
                                        <Typography variant="h6Bold">
                                            {label}
                                        </Typography>
                                    }
                                />
                            </MenuButton>
                        </NavLink>
                    )}
                    <MenuLine />
                </React.Fragment>
            ))}
        </MenuWrapper>
    )
}

export default MenuMobile
