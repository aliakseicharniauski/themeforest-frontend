import * as React from "react";
import { List, ListItemText, Typography } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Menu, SubMenu } from "./styled";

import IconListItemArrow from "@assets/icon_listitem_arrow.svg";

// TODO: replace to routes, separate types
interface NavigationLink {
  name: string;
  href: string;
  links?: Array<{ name: string; href: string }>;
}

interface MenuMobileProps {
  navigationLinks: Array<NavigationLink>;
}

export default function MenuMobile({ navigationLinks }: MenuMobileProps) {
  const [openId, setOpenId] = React.useState<string | null>(null);

  const handleClick = (id: string | null) => () => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Menu.Wrapper>
      {navigationLinks.map((link) => (
        <React.Fragment key={link.name}>
          {link.links ? (
            <>
              <Menu.Button onClick={handleClick(link.name)}>
                <ListItemText
                  primary={
                    <Typography variant="h6Bold">{link.name}</Typography>
                  }
                />
                {openId === link.name ? <ExpandLess /> : <ExpandMore />}
              </Menu.Button>
              <SubMenu.Collapse
                in={openId === link.name}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {link.links.map((nestedLink) => (
                    <SubMenu.Button key={nestedLink.name}>
                      <ListItemText
                        // sx={{ flex: "none" }}
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
                  ))}
                </List>
              </SubMenu.Collapse>
            </>
          ) : (
            <Menu.Button>
              <ListItemText
                primary={<Typography variant="h6Bold">{link.name}</Typography>}
              />
            </Menu.Button>
          )}
          <Menu.Line />
        </React.Fragment>
      ))}
    </Menu.Wrapper>
  );
}
