import TitleBtnsContainer from "../miscComponents/TitleBtnsContainer";
import PeopleDraggable from "../miscComponents/PeopleDraggable";

export default function Doctors() {
  const imgSources = [
    { id: 1, src: "/results-img.png" },
    { id: 2, src: "/image-3.png" },
    { id: 3, src: "/image-4.png" },
    { id: 4, src: "/results-img.png" },
    { id: 5, src: "/image-3.png" },
    { id: 6, src: "/image-4.png" },
    { id: 7, src: "/results-img.png" },
    { id: 8, src: "/image-3.png" },
    { id: 9, src: "/image-4.png" },
  ];

  return (
    <section>
      <TitleBtnsContainer
        titleType={"basic"}
        title={"My Doctors"}
        activeBtns={{ arrow: true }}
      />
      <PeopleDraggable people={imgSources} />
    </section>
  );
}
