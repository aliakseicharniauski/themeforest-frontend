import styled from 'styled-components'
import { ListItemButton, Collapse, ListItemIcon } from '@mui/material'
import { styled as styledMui } from '@mui/material/styles'

export const Menu = {
    Wrapper: styled.div``,
    Button: styledMui(ListItemButton)`
      margin: 0 16px;
      padding: 15px 0;
  
      &:first-of-type {
          border: none;
      }
    `,
    Line: styled.div`
        height: 1px;
        background-color: #9497a1; // TODO: change by params/theme
        margin: 0 16px;
    `,
}

export const SubMenu = {
    Button: styledMui(Menu.Button)`
      padding-left: 28px;
    `,
    Collapse: styledMui(Collapse)`
      margin: 0 16px;
    `,
    Arrow: styledMui(ListItemIcon)`
      margin-left: 7px;
    `,
}
