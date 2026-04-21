import { useEffect, useState } from "react";
import Logo from "../assets/flow-ai-logo.png";
import { MdMenu, MdOutlineClose } from "react-icons/md";

const COMPANY_LINKS = [
  "Our Process",
  "Grow With Us",
  "Services",
  "Testimonials",
] as const;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`fixed w-full z-50 transition ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="">
            <img src={Logo} alt="Flow AI logo" width="120px" />
          </div>

          <div className="gap-8 text-gray-600 font-semibold hidden md:flex">
            {COMPANY_LINKS.map((link) => (
              <a key={link} className="cursor-pointer" href="#">
                {link}
              </a>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <MdOutlineClose /> : <MdMenu />}
          </button>

          <div className="flex gap-8 font-semibold">
            <button className="text-gray-600 cursor-pointer">Login</button>
            <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white cursor-pointer ">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="px-6 py-4 space-y-4 text-gray-600 bg-white border-t md:hidden">
          {COMPANY_LINKS.map((link) => (
            <a key={link} href="#" className="block">
              {link}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default NavBar;
