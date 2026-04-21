import StarBox from "../../assets/star-box.svg";
import CertifiedBox from "../../assets/certified-box.svg";
import LightBox from "../../assets/light-box.svg";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="relative max-w-1920 mx-auto pt-35 md:pt-65">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center px-4 py-3 md:px-7 lg:py-10 rounded-2xl border border-slate-300">
          <h3 className="mb-4 lg:mb-0 text-center md:text-left text-[34px] font-extrabold">
            Among leave law built now
          </h3>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-7">
            <div className="flex flex-1 gap-4 items-center justify-start">
              <img src={StarBox} alt="" />
              <p className="text-gray-500">Village did remov enjoyed</p>
            </div>
            <div className="flex flex-1 gap-4  items-center justify-start">
              <img src={CertifiedBox} alt="" />
              <p className="text-gray-500">Nay likely length sooner</p>
            </div>
            <div className="flex flex-1 gap-4  items-center justify-start">
              <img src={LightBox} alt="" />
              <p className="text-gray-500">Expense windows adapted </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-7 lg:flex-row pt-14 md:pt-24 lg:pt-32">
          <ServiceCard
            title="Offend belong promote provision"
            subTitle="Wise busy past both park when an ye no. Nay likely her length sooner thrown text lively income. "
          />
          <ServiceCard
            title="Consulted ourselves it blessing welcome"
            subTitle="The expense windows adapted sir. Wrong widen drawn ample eat off doors money."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
