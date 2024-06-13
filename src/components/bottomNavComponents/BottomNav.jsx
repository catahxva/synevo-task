import classes from "./BottomNav.module.css";

import { useState } from "react";

import HomeSvg from "../svgs/HomeSvg";
import AppointmentsSvg from "../svgs/AppointmentsSvg";
import ResultsSvg from "../svgs/ResultsSvg";
import StoreSvg from "../svgs/StoreSvg";

import BottomNavBtn from "./BottomNavBtn";

const btnsArr = [
  {
    SvgComponent: HomeSvg,
    text: "Home",
  },
  {
    SvgComponent: AppointmentsSvg,
    text: "Appointments",
  },
  {
    SvgComponent: ResultsSvg,
    text: "Results",
  },
  {
    SvgComponent: StoreSvg,
    text: "Store",
    decoContent: "23",
  },
];

export default function BottomNav() {
  const [selectedBtn, setSelectedBtn] = useState(btnsArr[0].text);

  return (
    <nav className={classes.bottom_nav}>
      {btnsArr.map((btn) => (
        <BottomNavBtn
          {...btn}
          key={btn.text}
          onClick={() => setSelectedBtn(btn.text)}
          selected={btn.text === selectedBtn}
        />
      ))}
    </nav>
  );
}
