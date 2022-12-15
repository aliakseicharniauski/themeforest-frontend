import { Link } from "@mui/material";
import { styled as styledMui } from "@mui/material/styles";
import styled from "styled-components";

export const HeaderLink = styledMui(Link)`
  color: #9497a1;

  :hover {
    color: #292d33;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 800px) {
    display: none;
    //   flex-direction: column;
    //   position: fixed;
    //   left: -100%;
    //   right: 0;
    //   top: 0;
    //   bottom: 0;
    //   width: 100%;
    //   height: 100vh;
    //   background-color: #f8f8f8;
    //   z-index: 10;
    //   transition: left 1s;
  }
`;
