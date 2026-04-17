import OperationCurve from "../assets/operation-curve.svg";
import OperationBg from "../assets/operation-circle-bg.svg";
import StepCard from "./StepCard";

const Operation = () => {
    const steps = [
      {
        itemNumber: "1",
        title: "Project Discovery Call",
        description:
          "Party we years to order allow asked of. We so opinion friends me message as delight.",
        className:
          "relative md:absolute md:top-15 md:left-10 lg:top-10 lg:left-20 xl:top-19 xl:left-20 2xl:top-29 2xl:left-40",
      },
      {
        itemNumber: "2",
        title: "Project Discovery Call",
        description:
          "His defective nor convinced residence own. Connection has put impossible own apartments boisterous.",
        className:
          "relative md:absolute md:top-0 md:left-70 lg:-top-18 lg:left-110 xl:-top-10 xl:left-125 2xl:-top-9 2xl:left-160",
      },
      {
        itemNumber: "3",
        title: "Project Discovery Call",
        description:
          "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.",
        className:
          "relative md:absolute md:-top-23 md:right-0 lg:-top-60 xl:-top-45 xl:right-0 2xl:-top-72 2xl:-right-38",
      },
    ];
  return (
    <section className="relative max-w-1920 mx-auto py-16 md:py-27 md:h-208">
      <div className="max-w-6xl mx-auto px-6">
        <div className="md:w-3/5 lg:w-2/5">
          <p className="text-indigo-600 text-sm font-medium">
            STOCKIE OPERATION ACROSS THE WORLD
          </p>

          <h2 className="text-[40px] font-bold mt-4 leading-12">
            We have best team and best process
          </h2>

          <p className="text-gray-500 mt-4 pr-2.5">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy.
          </p>

          <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-4xl">
            Get Started
          </button>
        </div>

        <div className="relative mt-8 md:mt-0">
          <img
            src={OperationCurve}
            alt="operation curve"
            className="absolute hidden md:block md:-top-35 left-0 w-full lg:-top-65"
          />

          {steps.map((step) => (
            <StepCard
              itemNumber={step.itemNumber}
              title={step.title}
              description={step.description}
              className={`${step.className} w-full md:w-50 xl:w-69 mb-10 md:mb-0`}
            />
          ))}
        </div>
      </div>
      <img
        src={OperationBg}
        alt="operation bg"
        className="absolute right-0 top-15 -z-2"
      />
    </section>
  );
};

export default Operation;
