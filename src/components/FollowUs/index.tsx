import * as React from "react";
import IconFollowUs1 from "@assets/icon_followus_1.svg";
import IconFollowUs2 from "@assets/icon_followus_2.svg";
import IconFollowUs3 from "@assets/icon_followus_3.svg";
import IconFollowUs4 from "@assets/icon_followus_4.svg";
import IconFollowUs5 from "@assets/icon_followus_5.svg";
import IconFollowUs6 from "@assets/icon_followus_6.svg";
import { Social } from "./styled";

// TODO: separate to constants/utils
const links = [
  { icon: <IconFollowUs1 />, href: "https://react-svgr.com/" },
  { icon: <IconFollowUs2 />, href: "https://react-svgr.com/docs/webpack/" },
  { icon: <IconFollowUs3 />, href: "https://react-svgr.com/docs/node-api/" },
  { icon: <IconFollowUs4 />, href: "https://react-svgr.com/docs/next/" },
  { icon: <IconFollowUs5 />, href: "https://react-svgr.com/docs/remix/" },
  { icon: <IconFollowUs6 />, href: "https://react-svgr.com/docs/rollup/" },
];

const FollowUs: React.FC = () => {
  return (
    <Social.Wrapper>
      {links.map((link) => (
        <Social.Item
          key={link.href}
          target="_blank"
          rel="noopener noreferrer"
          href={link.href}
        >
          {link.icon}
        </Social.Item>
      ))}
    </Social.Wrapper>
  );
};

export default FollowUs;
