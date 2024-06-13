import DraggableComponent from "../miscComponents/DraggableComponent";
import TabsCard from "./TabsCard";

import NotesSvg from "../svgs/NotesSvg";
import FamilySvg from "../svgs/FamilySvg";

const tabs = [
  {
    TabSvg: NotesSvg,
    tabTitle: "Medical",
    tabSubtitle: "library",
  },
  {
    TabSvg: FamilySvg,
    tabTitle: "Test",
    tabSubtitle: "results",
    notifications: 4,
  },
  {
    TabSvg: NotesSvg,
    tabTitle: "Medical",
    tabSubtitle: "library",
  },
  {
    TabSvg: FamilySvg,
    tabTitle: "Test",
    tabSubtitle: "results",
  },
];

export default function Tabs() {
  return (
    <section>
      <DraggableComponent marginLeft={"small"}>
        {tabs.map((tab, i) => (
          <TabsCard {...tab} key={i} />
        ))}
      </DraggableComponent>
    </section>
  );
}
