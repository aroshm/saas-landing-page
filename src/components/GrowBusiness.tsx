import NextLevelImg from "../assets/next-level.png";
import GrowCard from "./GrowCard";
import Throphy from "../assets/throphy.svg";
import Tulip from "../assets/tulip.svg";
import Sun from "../assets/sun.svg";

const GrowItems = [
  {
    imgSrc: `${Throphy}`,
    title: "Offending belonging",
    subtitle:
      "Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.",
  },
  {
    imgSrc: `${Tulip}`,
    title: "Promotion & provision",
    subtitle:
      "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. ",
  },
  {
    imgSrc: `${Sun}`,
    title: "Blessing application",
    subtitle:
      "Ham windows sixteen who inquiry fortune demands. Is be upon sang fond must shew. Really boy law county she unable her sister.",
  },
] as const;

const GrowBusiness = () => {
  return (
    <section
      className="relative max-w-1920 mx-auto bg-[#f5f8ff]
  before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-75
  before:bg-white before:[clip-path:ellipse(88%_100%_at_50%_0%)] md:before:[clip-path:ellipse(75%_100%_at_50%_0%)]

  after:content-[''] after:absolute after:-bottom-20 after:left-0 after:w-full after:h-20
  after:bg-[#f5f8ff] after:[clip-path:ellipse(72%_100%_at_50%_0%)] md:after:[clip-path:ellipse(55%_100%_at_50%_0%)]"
    >
      <div className="relative mx-auto w-207.5 max-w-9/10">
        <img src={NextLevelImg} alt="" className="" />
        <div className="relative md:absolute left-0 top-0 flex flex-col justify-center items-center w-full h-full text-center text-white">
          <h3 className="text-[42px] font-bold text-black md:text-white">
            Push your product to next level.
          </h3>
          <p className="text-xl w-7/10 mb-5 text-black md:text-white">
            End-to-end payments and financial management in a single solution.
            Meet the right platform to help realize.
          </p>
          <button className="px-10 py-3 bg-red-400 rounded-4xl cursor-pointer">
            Get Started
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-15 md:pt-32">
        <h3 className="mb-3.5 text-[42px] font-bold text-center">
          We help your business grow faster.
        </h3>
        <p className="max-w-151 mx-auto text-xl text-center text-hero-text">
          Why kept very ever home mrs. Considered sympathize ten uncommonly
          occasional assistance sufficient.
        </p>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-7 pt-16">
          {GrowItems.map((item) => (
            <GrowCard
              key={item.title}
              imgSrc={item.imgSrc}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
        <button className="block mx-auto mt-10 bg-indigo-600 text-white px-14 py-5 rounded-xl cursor-pointer">
          More About Platform
        </button>
      </div>
    </section>
  );
};

export default GrowBusiness;
