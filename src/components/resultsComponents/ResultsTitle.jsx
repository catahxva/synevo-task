import classes from "./ResultsTitle.module.css";

import RoundImg from "../miscComponents/RoundImg";

export default function ResultsTitle() {
  return (
    <div className={classes.results_title_comp}>
      <RoundImg size={"small"} imgSrc={"/results-img.png"} />
      <div>
        <h2 className={classes.results_title}>Latest Results for</h2>
        <h3 className={classes.results_name}>Elisabeta Ardeleanu</h3>
      </div>
    </div>
  );
}
