import classes from "./RoundImg.module.css";

export default function RoundImg({ size, imgSrc }) {
  const additionalClass =
    size === "large"
      ? classes.container_img_large
      : classes.container_img_small;

  return (
    <div className={`${classes.container_img} ${additionalClass}`}>
      <img src={imgSrc} className={classes.img} />
    </div>
  );
}
