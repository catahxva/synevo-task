import classes from "./BasicTitle.module.css";

export default function BasicTitle({ title }) {
  const titleArr = title.split(" ");
  const titleFirstWord = titleArr[0];
  const restOfTitle = titleArr.slice(1).join(" ");

  return (
    <h2 className={classes.title}>
      <span className={classes.title_span}>{titleFirstWord}</span> {restOfTitle}
    </h2>
  );
}
