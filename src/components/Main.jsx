import classes from "./Main.module.css";

export default function Main({ children }) {
  return <main className={classes.main_container}>{children}</main>;
}
