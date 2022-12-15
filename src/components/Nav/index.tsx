/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO: add navigation links
import { Typography } from "@mui/material";
import React from "react";
import { HeaderLink, Menu } from "./styled";

export default function Nav({ navigationLinks }: any) {
  return (
    <Menu>
      {navigationLinks.map((item: any) => (
        <HeaderLink
          underline="none"
          color="textPrimary"
          href={item.href}
          key={item.name}
        >
          <Typography variant="h8SemiBold">{item.name}</Typography>
        </HeaderLink>
      ))}
    </Menu>
  );
}
