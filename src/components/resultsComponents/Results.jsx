import TitleBtnsContainer from "../miscComponents/TitleBtnsContainer";
import ResultsTitle from "./ResultsTitle";
import ResultsCard from "./ResultsCard";
import DraggableComponent from "../miscComponents/DraggableComponent";

export default function Results() {
  const results = [
    {
      id: 1,
      testName: "Urine test or longer test name",
      pacientName: "Olivia Wilson",
      status: "ready",
    },
    {
      id: 2,
      testName: "Urine test or longer test name",
      pacientName: "Olivia Wilson",
      status: "ready",
    },
    {
      id: 3,
      testName: "Urine test or longer test name",
      pacientName: "Olivia Wilson",
      status: "ready",
    },
  ];

  return (
    <section>
      <TitleBtnsContainer
        TitleComp={ResultsTitle}
        activeBtns={{ arrow: true }}
      />
      <DraggableComponent marginLeft={"medium"}>
        {results.map((result) => (
          <ResultsCard {...result} key={`${result.id}`} />
        ))}
      </DraggableComponent>
    </section>
  );
}
