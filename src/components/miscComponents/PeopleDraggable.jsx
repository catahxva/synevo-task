import DraggableComponent from "./DraggableComponent";
import RoundImg from "./RoundImg";

export default function PeopleDraggable({ people }) {
  return (
    <DraggableComponent>
      {people.map((p) => (
        <RoundImg imgSrc={p.src} key={p.id} />
      ))}
    </DraggableComponent>
  );
}
