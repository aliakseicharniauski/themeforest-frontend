import styled from 'styled-components'
import { ListItemButton, Collapse, ListItemIcon } from '@mui/material'
import { styled as styledMui } from '@mui/material/styles'

export const MenuWrapper = styled.div``

export const MenuButton = styledMui(ListItemButton)`
      margin: 0 1rem;
      padding: 1rem 0;
  
      &:first-of-type {
          border: none;
      }
    `

export const MenuLine = styled.div`
    height: 1px;
    background-color: #9497a1; // TODO: change by params/theme
    margin: 0 1rem;
`

export const SubMenuButton = styledMui(MenuButton)`
      padding-left: 1.75rem;
    `

export const SubMenuCollapse = styledMui(Collapse)`
      margin: 0 1rem;
    `

export const SubMenuArrow = styledMui(ListItemIcon)`
      margin-left: 0.5rem;
    `
