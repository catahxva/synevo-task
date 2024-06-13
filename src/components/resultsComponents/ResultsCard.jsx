import classes from "./ResultsCard.module.css";

import BasicCard from "../miscComponents/BasicCard";
import ResultsCardBtn from "./ResultsCardBtn";

export default function ResultsCard({ testName, pacientName, status }) {
  return (
    <BasicCard>
      <p className={classes.card_title}>{testName}</p>
      <span className={classes.card_name}>{pacientName}</span>
      <div className={classes.card_container_btns}>
        <ResultsCardBtn bgType={"full"}>{status}</ResultsCardBtn>
        <ResultsCardBtn>See Results</ResultsCardBtn>
      </div>
    </BasicCard>
  );
}
