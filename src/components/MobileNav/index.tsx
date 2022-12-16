import * as React from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  ListItemIcon,
  Typography,
  ListItemText,
  ListItemButton,
  List,
  Stack,
} from "@mui/material";

import {
  ListItemButtonStyled,
  MobileNavStyled,
  FollowUsContainer,
  CollapseStyled,
} from "./styled";
import IconListItemArrow from "../../assets/icon_listitem_arrow.svg";
import IconFollowUs1 from "../../assets/icon_followus_1.svg";
import IconFollowUs2 from "../../assets/icon_followus_2.svg";
import IconFollowUs3 from "../../assets/icon_followus_3.svg";
import IconFollowUs4 from "../../assets/icon_followus_4.svg";
import IconFollowUs5 from "../../assets/icon_followus_5.svg";
import IconFollowUs6 from "../../assets/icon_followus_6.svg";

const navigationLinks = [
  { name: "Home", href: "" },
  { name: "Solutions", href: "" },
  {
    name: "Pages",
    href: "",
    links: [
      { name: "Page1", href: "" },
      { name: "Page2", href: "" },
    ],
  },
  { name: "Elements", href: "" },
  {
    name: "Blog",
    href: "",
    links: [
      { name: "Page3", href: "" },
      { name: "Page4", href: "" },
    ],
  },
  {
    name: "Contacts",
    href: "",
    links: [
      { name: "Page3", href: "" },
      { name: "Page4", href: "" },
      { name: "Page5", href: "" },
      { name: "Page6", href: "" },
      { name: "Page7", href: "" },
      { name: "Page8", href: "" },
      { name: "Page9", href: "" },
      { name: "Page10", href: "" },
      { name: "Page11", href: "" },
    ],
  },
];

interface Props {
  mobileNav: boolean;
}

export default function MobileNav({ mobileNav }: Props) {
  const [openId, setOpenId] = React.useState<string | null>(null);

  const handleClick = (id: string | null) => () => {
    setOpenId(openId === id ? null : id);
  };

  console.log(mobileNav);

  return (
    <>
      <MobileNavStyled mobileNav={mobileNav}>
        {navigationLinks.map((link) =>
          link.links ? (
            <React.Fragment key={link.name}>
              <ListItemButtonStyled onClick={handleClick(link.name)}>
                <ListItemText
                  primary={
                    <Typography variant="h6Bold">{link.name}</Typography>
                  }
                />
                {openId === link.name ? <ExpandLess /> : <ExpandMore />}
              </ListItemButtonStyled>
              <CollapseStyled
                in={openId === link.name}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {link.links.map((nestedLink) => (
                    <ListItemButton key={nestedLink.name} sx={{ pl: "28px" }}>
                      <ListItemText
                        sx={{ flex: "none" }}
                        primary={
                          <Typography variant="h7SemiBold">
                            {nestedLink.name}
                          </Typography>
                        }
                      />
                      <ListItemIcon sx={{ ml: "7px" }}>
                        <IconListItemArrow />
                      </ListItemIcon>
                    </ListItemButton>
                  ))}
                </List>
              </CollapseStyled>
            </React.Fragment>
          ) : (
            <ListItemButtonStyled key={link.name}>
              <ListItemText
                primary={<Typography variant="h6Bold">{link.name}</Typography>}
              />
            </ListItemButtonStyled>
          )
        )}
      </MobileNavStyled>
      <FollowUsContainer direction="row">
        <Typography variant="h6Bold">Follow us</Typography>
        <Stack sx={{ gap: "13px" }} direction="row">
          <IconFollowUs1 />
          <IconFollowUs2 />
          <IconFollowUs3 />
          <IconFollowUs4 />
          <IconFollowUs5 />
          <IconFollowUs6 />
        </Stack>
      </FollowUsContainer>
    </>
  );
}
