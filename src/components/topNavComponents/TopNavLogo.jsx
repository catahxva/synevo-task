import classes from "./TopNavLogo.module.css";

import LogoSvg from "../svgs/LogoSvg";

export default function TopNavLogo() {
  return (
    <div className={classes.top_nav_logo}>
      <LogoSvg className={classes.top_nav_logo_svg} />
      <span className={classes.top_nav_logo_text}>synevo</span>
    </div>
  );
}
