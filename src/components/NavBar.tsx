import { useEffect, useState } from "react";
import Logo from "../assets/flow-ai-logo.png";
import { MdMenu, MdOutlineClose } from "react-icons/md";

const COMPANY_LINKS = [
  { label: "Our Process", link: "#process" },
  { label: "Grow With Us", link: "#grow" },
  { label: "Services", link: "#services" },
  { label: "Testimonials", link: "#testimonial" },
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
              <a key={link.label} className="cursor-pointer" href={link.link}>
                {link.label}
              </a>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <MdOutlineClose className="text-xl"/> : <MdMenu />}
          </button>

          <div className="items-center gap-8 font-semibold hidden lg:flex">
            <a className="text-gray-600 cursor-pointer" href="#newsletter">
              Login
            </a>
            <a
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white cursor-pointer"
              href="#newsletter"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col px-6 pb-10 pt-25 space-y-4 bg-white border-t md:hidden shadow-md fixed z-49 w-full">
          {COMPANY_LINKS.map((link) => (
            <a key={link.label} className="cursor-pointer" href={link.link}>
              {link.label}
            </a>
          ))}

          <div className="flex flex-col gap-8 font-semibold">
            <a className="text-gray-600 cursor-pointer" href="#newsletter">
              Login
            </a>
            <a
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white cursor-pointer"
              href="#newsletter"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
