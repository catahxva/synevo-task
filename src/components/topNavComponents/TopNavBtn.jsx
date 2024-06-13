import classes from "./TopNavBtn.module.css";

export default function TopNavBtn({ Svg, deco }) {
  return (
    <button className={classes.top_nav_btn}>
      <Svg className={classes.top_nav_svg} />
      {deco && <div className={classes.top_nav_btn_deco}></div>}
    </button>
  );
}
