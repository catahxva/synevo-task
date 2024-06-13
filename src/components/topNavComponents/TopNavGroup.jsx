import classes from "./TopNavGroup.module.css";

export default function TopNavGroup({ children }) {
  return <div className={classes.top_nav_group}>{children}</div>;
}
