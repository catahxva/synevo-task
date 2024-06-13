import Main from "./components/Main";
import TopNav from "./components/topNavComponents/TopNav";
import Tabs from "./components/tabsComponents/Tabs";
import Results from "./components/resultsComponents/Results";
import Appointments from "./components/appointmentsComponents/Appointments";
import Family from "./components/familyComponents/Family";
import Doctors from "./components/doctorsComponents/Doctors";
import Cta from "./components/ctaComponents/Cta";
import BottomNav from "./components/bottomNavComponents/BottomNav";

function App() {
  return (
    <Main>
      <TopNav />
      <Tabs />
      <Results />
      <Appointments />
      <Family />
      <Doctors />
      <Cta />
      <BottomNav />
    </Main>
  );
}

export default App;
