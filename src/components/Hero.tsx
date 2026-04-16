import HeroBg from "../assets/hero-bg.svg";
import HeroRightImg from "../assets/hero-right-img.svg";
import { MdCheckCircle } from "react-icons/md";
const Hero = () => {
  return (
    <section className="relative max-w-1920 mx-auto py-20 overflow-hidden border-b border-b-gray-200">
      <img
        src={HeroBg}
        alt=""
        className="absolute top-0 left-0 w-full md:w-3/5"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="w-full pt-2.5 md:w-4/6 md:pt-12 lg:pt-20">
          <h3 className="mb-1 font-semibold text-black text-lg md:text-xl">
            Product Growth Solution in Single Platform.
          </h3>
          <h1 className="mb-3 text-5xl font-bold leading-15 md:leading-20 md:text-6xl">
            Managing business payments has never been easier
          </h1>
          <p className="mb-5 leading-7 font-normal text-lg text-hero-text md:text-xl md:leading-10 md:w-8/10">
            Never at water me might. On formed merits hunted unable merely by mr
            whence or. Possession the unpleasing simplicity her uncommonly.
          </p>
          <form className="flex flex-wrap gap-2  px-5 py-4 mb-10 bg-white shadow md:w-9/10 md:mb-14">
            <div className="flex flex-col flex-1 justify-between w-full">
              <label htmlFor="register-email" className="mb-1.5 text-gray-600">
                Register using email address
              </label>
              <input
                type="email"
                name="register-email"
                id="register-email"
                className="text-lg font-bold text-gray-800 focus:outline-0 focus:border-b-gray-500 focus:border-b md:text-2xl"
                placeholder="Email Address"
              />
            </div>

            <button className="px-10 py-3 bg-black text-white md:px-16 md:py-5">
              Submit
            </button>
          </form>
          <div className="flex gap-7">
            <div className="flex items-center gap-1.5">
              <MdCheckCircle className="text-indigo-500 text-xl" />
              <span className="text-hero-text">Free Register</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MdCheckCircle className="text-indigo-500 text-xl" />
              <span className="text-hero-text">Great Service</span>
            </div>
          </div>
        </div>
      </div>

      <img
        src={HeroRightImg}
        alt=""
        className="md:absolute md:top-1/8 md:-right-55 md:-z-1 lg:top-12 xl:-right-22 xl:top-6 2xl:right-0 2xl:top-5"
      />
    </section>
  );
};

export default Hero;
