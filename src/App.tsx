import "./App.scss";
import Services from "./components/Services/Services";
import Brands from "./components/Brands";
import DownloadApp from "./components/DownloadApp";
import GrowBusiness from "./components/Grow/GrowBusiness";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Operation from "./components/Operation/Operation";
import Testimonials from "./components/Testimonials/Testimonials";
import Blog from "./components/Blog/Blog";

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
      <Blog />
    </>
  );
}

export default App;
