import classes from "./RoundBtn.module.css";

export default function RoundBtn({ size, children }) {
  const btnClasses =
    size === "large"
      ? `${classes.round_btn} ${classes.round_btn_large}`
      : `${classes.round_btn} ${classes.round_btn_small}`;

  return <button className={btnClasses}>{children}</button>;
}
