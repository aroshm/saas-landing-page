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
        className: "top-26 left-32",
      },
      {
        itemNumber: "2",
        title: "Project Discovery Call",
        description:
          "His defective nor convinced residence own. Connection has put impossible own apartments boisterous.",
        className: "-top-8 left-155",
      },
      {
        itemNumber: "3",
        title: "Project Discovery Call",
        description:
          "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.",
        className: "-top-73 -right-40",
      },
    ];
  return (
    <section className="relative max-w-1920 mx-auto py-27 h-208">
      <div className="max-w-6xl mx-auto px-6">
        <div className="w-2/5">
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

        <div className="relative">
          <img
            src={OperationCurve}
            alt="operation curve"
            className="absolute -top-65 left-0 w-full"
          />

          {steps.map((step) => (
            <StepCard
              itemNumber={step.itemNumber}
              title={step.title}
              description={step.description}
              className={`${step.className} w-69`}
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
