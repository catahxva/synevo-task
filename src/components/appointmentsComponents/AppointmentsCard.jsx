import classes from "./AppointmentsCard.module.css";

import BasicCard from "../miscComponents/BasicCard";

import PinSvg from "../svgs/PinSvg";

import AppointmentsCardListItem from "./AppointmentsCardListItem";

export default function AppointmentsCard({ pacientName, location, data }) {
  return (
    <BasicCard>
      <p className={classes.card_pacient}>{pacientName}</p>
      <div className={classes.card_location}>
        <PinSvg className={classes.card_location_svg} />
        <span className={classes.card_location_text}>{location}</span>
      </div>
      <ul className={classes.card_list}>
        {data.map((data, i) => (
          <AppointmentsCardListItem {...data} key={i} />
        ))}
      </ul>
    </BasicCard>
  );
}
