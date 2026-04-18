import StarBox from "../assets/star-box.svg";
import CertifiedBox from "../assets/certified-box.svg";
import LightBox from "../assets/light-box.svg";

const Services = () => {
  return (
    <section className="relative max-w-1920 mx-auto pt-35 md:pt-65">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center px-7 py-10 rounded-2xl border border-slate-300">
          <h3 className="text-[34px] font-extrabold">
            Among leave law built now
          </h3>
          <div className="flex items-center gap-7">
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
      </div>
    </section>
  );
};

export default Services;
