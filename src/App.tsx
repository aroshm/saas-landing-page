import "./App.scss";
import Services from "./components/Services";
import Brands from "./components/Brands";
import DownloadApp from "./components/DownloadApp";
import GrowBusiness from "./components/GrowBusiness";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Operation from "./components/Operation";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Brands />
      <Operation />
      <GrowBusiness />
      <Services />
      <Testimonials />
      <DownloadApp />
    </>
  );
}

export default App;
