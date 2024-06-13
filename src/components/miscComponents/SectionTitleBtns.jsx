import classes from "./SectionTitleBtns.module.css";

import PlusSvg from "../svgs/PlusSvg";
import RightArrow from "../svgs/RightArrow";

import RoundBtn from "./RoundBtn";

export default function SectionTitleBtns({ plus, arrow }) {
  return (
    <div className={classes.container_btns}>
      {plus && (
        <RoundBtn size={"small"}>
          <PlusSvg className={classes.svg} />
        </RoundBtn>
      )}
      {arrow && (
        <RoundBtn size={"small"}>
          <RightArrow className={classes.svg} />
        </RoundBtn>
      )}
    </div>
  );
}
