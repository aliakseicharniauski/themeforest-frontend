import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { styled as styledMui } from "@mui/material/styles";
import styled from "styled-components";
import Logo from "../../assets/logo_blue.svg";
import IconMenu from "../../assets/icon_menu.svg";
import IconMenuClose from "../../assets/icon_menu_close.svg";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { StyledHeader } from "./styled";
import MobileNav from "../MobileNav";
import Nav from "../Nav";

const navigationLinks = [
  { name: "Home", href: "" },
  { name: "Solutions", href: "" },
  { name: "Pages", href: "" },
  { name: "Elements", href: "" },
  { name: "Blog", href: "" },
  { name: "Contacts", href: "" },
];

const WatchVideoBtn = styledMui(Button)`
  text-transform: none;
  color: #FFFFFF;
  width: 168px;
  height: 44px;

  @media (max-width: 800px) {
    display: none;
  }
`;

const BoxStyled = styledMui(Box)`
  height: 126px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // border-bottom: 1px solid gray;
  margin: 0 16px;

  @media (max-width: 800px) {
    height: 70px;
  }
`;

const LogoContainerStyled = styledMui(Box)`
  display: flex;
  align-items: center;
  z-index: 11;
  // gap: 10px;
`;

const MobileBtn = styledMui(Box)`
  display: none;

  @media (max-width: 800px) {
    display: block;
    position: absolute;
    right: 18px;
    top: 28px;
    cursor: pointer;
    z-index: 10;
  }
`;

const Container = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  padding: 0 0px;
`;

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <StyledHeader>
      <Container>
        <BoxStyled>
          <LogoContainerStyled>
            <Logo width={141} height={46} />
          </LogoContainerStyled>

          <Nav navigationLinks={navigationLinks} />

          <WatchVideoBtn
            variant="contained"
            startIcon={<PlayCircleOutlineIcon />}
          >
            <Typography variant="h7SemiBold">Watch the demo</Typography>
          </WatchVideoBtn>

          <MobileNav mobileNav={mobileNav} />

          <MobileBtn onClick={() => setMobileNav(!mobileNav)}>
            {mobileNav ? (
              <IconMenuClose width={16.1} height={16.1} />
            ) : (
              <IconMenu width={20} height={14} />
            )}
          </MobileBtn>
        </BoxStyled>
      </Container>
    </StyledHeader>
  );
};

export default Header;

// <AppBarStyled color="default">
//   <Container maxWidth="lg">
//     <ToolbarStyled
//       disableGutters
//       sx={{ display: { xs: "none", lg: "flex" } }}
//     >
//       <Logo width={141} height={46} />
//       <Stack
//         direction="row" /* sx={{ display: { xs: "none", lg: "block" } }} */
//       >
//         {navigationLinks.map((item) => (
//           <HeaderLink
//             underline="none"
//             color="textPrimary"
//             href={item.href}
//             key={item.name}
//           >
//             {item.name}
//           </HeaderLink>
//         ))}
//       </Stack>

// <WatchVideoBtn
//   variant="contained"
//   startIcon={<PlayCircleOutlineIcon />}
//   // sx={{ display: { xs: "none", lg: "flex" } }}
// >
//   Watch the demo
// </WatchVideoBtn>
//     </ToolbarStyled>
//     <Stack sx={{ display: { xs: "block", lg: "none" } }}>
//       Mobile Toolbar
//       <IconMenu width={20} height={14} />
//       <IconMenuClose width={16} height={16} />
//     </Stack>
//   </Container>
// </AppBarStyled>
