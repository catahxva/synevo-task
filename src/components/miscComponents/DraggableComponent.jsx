import classes from "./DraggableComponent.module.css";

export default function DraggableComponent({ children, marginLeft }) {
  const additionalClass =
    marginLeft === "small"
      ? classes.draggable_small_margin
      : marginLeft === "medium"
      ? classes.draggable_medium_margin
      : classes.draggable_large_margin;

  return (
    <div className={`${classes.draggable} ${additionalClass}`}>{children}</div>
  );
}
