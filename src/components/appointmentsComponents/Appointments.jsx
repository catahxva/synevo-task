import classes from "./Appointments.module.css";

import TitleBtnsContainer from "../miscComponents/TitleBtnsContainer";
import DraggableComponent from "../miscComponents/DraggableComponent";
import AppointmentsCard from "./AppointmentsCard";

import DateSvg from "../svgs/DateSvg";
import ClockSvg from "../svgs/ClockSvg";
import DropSvg from "../svgs/DropSvg";

export default function Appointments() {
  const appointments = [
    {
      id: 1,
      pacientName: "Popescu Ionut Vasile",
      location: "Centrul de recoltare rozovici",
      data: [
        {
          data: "23.03.2022",
          DataSvg: DateSvg,
        },
        {
          data: "14:00",
          DataSvg: ClockSvg,
        },
        {
          data: "Teste uzuale",
          DataSvg: DropSvg,
        },
      ],
    },
    {
      id: 2,
      pacientName: "Popescu Ionut Vasile",
      location: "Centrul de recoltare rozovici",
      data: [
        {
          data: "23.03.2022",
          DataSvg: DateSvg,
        },
        {
          data: "14:00",
          DataSvg: ClockSvg,
        },
        {
          data: "Teste uzuale",
          DataSvg: DropSvg,
        },
      ],
    },
    {
      id: 3,
      pacientName: "Popescu Ionut Vasile",
      location: "Centrul de recoltare rozovici",
      data: [
        {
          data: "23.03.2022",
          DataSvg: DateSvg,
        },
        {
          data: "14:00",
          DataSvg: ClockSvg,
        },
        {
          data: "Teste uzuale",
          DataSvg: DropSvg,
        },
      ],
    },
  ];

  return (
    <section>
      <TitleBtnsContainer
        titleType={"basic"}
        title={"My Appointments"}
        activeBtns={{ plus: true, arrow: true }}
      />
      <DraggableComponent marginLeft={"medium"}>
        {appointments.map((appointment) => (
          <AppointmentsCard {...appointment} key={appointment.id} />
        ))}
      </DraggableComponent>
    </section>
  );
}
