import classes from "./TabsCard.module.css";

export default function TabsCard({
  TabSvg,
  tabTitle,
  tabSubtitle,
  notifications,
}) {
  return (
    <div className={classes.card}>
      {notifications && (
        <button className={classes.card_notif}>{notifications} new</button>
      )}
      <TabSvg className={classes.card_svg} />
      <p className={classes.card_title}>{tabTitle}</p>
      <span className={classes.card_subtitle}>{tabSubtitle}</span>
    </div>
  );
}
