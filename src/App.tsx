import "./App.scss";
import Services from "./components/Services";
import Brands from "./components/Brands";
import GrowBusiness from "./components/GrowBusiness";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Operation from "./components/Operation";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Brands />
      <Operation />
      <GrowBusiness />
      <Services/>
    </>
  );
}

export default App;
