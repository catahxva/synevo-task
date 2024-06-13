import classes from "./AppointmentsCardListItem.module.css";

export default function AppointmentsCardListItem({ data, DataSvg }) {
  return (
    <li className={classes.list_item}>
      <DataSvg className={classes.list_item_svg} />
      <span className={classes.list_item_span}>{data}</span>
    </li>
  );
}
