import "./App.scss";
import Services from "./components/Services/Services";
import Brands from "./components/Brands";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";
import GrowBusiness from "./components/Grow/GrowBusiness";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Operation from "./components/Operation/Operation";
import Testimonials from "./components/Testimonials/Testimonials";
import Blog from "./components/Blog/Blog";
import WhyChooseUs from "./components/WhyChooseUs";

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
      <WhyChooseUs />
      <Footer />
    </>
  );
}

export default App;
