import classes from "./ResultsCardBtn.module.css";

export default function ResultsCardBtn({ bgType, children }) {
  const additionalClass =
    bgType === "full" ? classes.bg_full : classes.bg_empty;

  return (
    <button className={`${classes.button} ${additionalClass}`}>
      {children}
    </button>
  );
}
