import { useState } from "react";
import Logo from "../assets/flow-ai-logo.png";
import { MdMenu, MdOutlineClose } from "react-icons/md";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="">
            <img src={Logo} alt="Flow AI logo" width="120px" />
          </div>

          <div className="hidden md:flex gap-8 text-gray-600 font-semibold">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <MdOutlineClose /> : <MdMenu />}
          </button>

          <div className="flex gap-8 font-semibold">
            <button className="text-gray-600">Login</button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 text-gray-600">
          <a href="#" className="block">
            Features
          </a>
          <a href="#" className="block">
            Pricing
          </a>
          <a href="#" className="block">
            About
          </a>
        </div>
      )}
    </>
  );
};

export default NavBar;
