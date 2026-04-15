import HeroBg from "../assets/hero-bg.svg";
import HeroRightImg from "../assets/hero-right-img.svg";
import { MdCheckCircle } from "react-icons/md";
const Hero = () => {
  return (
    <section className="relative max-w-1920 mx-auto py-20 overflow-hidden border-b border-b-gray-200">
      <img src={HeroBg} alt="" className="absolute top-0 left-0 w-3/5" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="w-full md:w-4/6 pt-20">
          <h3 className="mb-1 font-semibold text-black text-xl">
            Product Growth Solution in Single Platform.
          </h3>
          <h1 className="mb-3 text-6xl font-bold leading-20">
            Managing business payments has never been easier
          </h1>
          <p className="w-8/10 mb-5 leading-10 font-normal text-xl text-hero-text">
            Never at water me might. On formed merits hunted unable merely by mr
            whence or. Possession the unpleasing simplicity her uncommonly.
          </p>
          <form className="flex gap-2 w-9/10 px-5 py-4 mb-14 bg-white shadow">
            <div className="flex flex-col flex-1 justify-between">
              <label htmlFor="register-email" className="mb-1.5 text-gray-600">
                Register using email address
              </label>
              <input
                type="email"
                name="register-email"
                id="register-email"
                className="text-2xl font-bold text-gray-800 focus:outline-0 focus:border-b-gray-500 focus:border-b"
                placeholder="Email Address"
              />
            </div>

            <button className="px-16 py-5 bg-black text-white">Submit</button>
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

      <img src={HeroRightImg} alt="" className="absolute right-0 top-5" />
    </section>
  );
};

export default Hero;
