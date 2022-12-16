import { ListItemButton, Stack, Collapse } from "@mui/material";
import { styled as styledMui } from "@mui/material/styles";
import styled from "styled-components";

interface Props {
  mobileNav: boolean;
}

export const MobileNavStyled = styled.nav<Props>`
  display: none;

  @media (max-width: 800px) {
    display: ${(props) => (props.mobileNav ? "block" : "none")};
    position: fixed;
    left: 0;
    right: 0;
    top: 90px;
    bottom: 90px;
    width: 100%;
    max-height: 100%;
    overflow-y: scroll;
  }
`;

export const ListItemButtonStyled = styledMui(ListItemButton)`
  margin: 0 16px;
  padding: 15px 0;
  border-top: 1px solid #9497A1;

  &:first-of-type {
    border: none;
  }
`;

export const FollowUsContainer = styledMui(Stack)`
  display: none;

  @media (max-width: 800px) {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 43px 16px;
    justify-content: space-between;
  }
`;

export const CollapseStyled = styledMui(Collapse)`
  margin-left: 16px;
  margin-right: 16px;
  // border-bottom: 1px #9497A1 solid; // TODO check it
`;
