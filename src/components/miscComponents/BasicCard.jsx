import classes from "./BasicCard.module.css";

export default function BasicCard({ children }) {
  return <div className={classes.card}>{children}</div>;
}
