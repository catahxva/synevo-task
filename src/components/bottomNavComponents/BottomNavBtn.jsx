import classes from "./BottomNavBtn.module.css";

export default function BottomNavBtn({
  SvgComponent,
  text,
  decoContent,
  onClick,
  selected,
}) {
  const btnClasses = selected
    ? `${classes.button} ${classes.button_selected}`
    : classes.button;

  return (
    <button className={btnClasses} onClick={onClick}>
      <div className={classes.button_container_svg}>
        <SvgComponent className={classes.button_svg} />
        {decoContent && (
          <div className={classes.button_deco}>
            <span className={classes.button_deco_content}>{decoContent}</span>
          </div>
        )}
      </div>
      <span className={classes.button_text}>{text}</span>
    </button>
  );
}
