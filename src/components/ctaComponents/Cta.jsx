import classes from "./Cta.module.css";

import PlaySvg from "../svgs/PlaySvg";

export default function Cta() {
  return (
    <section className={classes.cta}>
      <img src="/image-11.png" className={classes.cta_img} />
      <div className={classes.cta_text_box}>
        <p className={`${classes.cta_text} ${classes.cta_text_colored}`}>
          Recoltare cu
        </p>
        <p className={classes.cta_text}>realitate augmentata</p>
      </div>
      <button className={classes.cta_button}>
        <PlaySvg className={classes.cta_svg} />
      </button>
    </section>
  );
}
