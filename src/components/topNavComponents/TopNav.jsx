import classes from "./TopNav.module.css";

import NavMenuSvg from "../svgs/NavMenuSvg";
import NotifSvg from "../svgs/NotifSvg";
import PlusSvg from "../svgs/PlusSvg";

import RoundBtn from "../miscComponents/RoundBtn";
import TopNavBtn from "./TopNavBtn";
import TopNavGroup from "./TopNavGroup";
import TopNavLogo from "./TopNavLogo";

export default function TopNav() {
  return (
    <nav className={classes.top_nav}>
      <TopNavGroup>
        <TopNavBtn Svg={NavMenuSvg} />
        <TopNavLogo />
      </TopNavGroup>
      <TopNavGroup>
        <TopNavBtn Svg={NotifSvg} deco />
        <RoundBtn size={"large"}>
          <PlusSvg className={classes.top_nav_svg} />
        </RoundBtn>
      </TopNavGroup>
    </nav>
  );
}
