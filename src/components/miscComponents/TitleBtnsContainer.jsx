import classes from "./TitleBtnsContainer.module.css";

import BasicTitle from "./BasicTitle";
import SectionTitleBtns from "./SectionTitleBtns";

export default function TitleBtnsContainer({
  titleType,
  title,
  TitleComp,
  activeBtns,
}) {
  return (
    <div className={classes.title_btns_container}>
      {titleType === "basic" ? <BasicTitle title={title} /> : <TitleComp />}
      <SectionTitleBtns {...activeBtns} />
    </div>
  );
}
