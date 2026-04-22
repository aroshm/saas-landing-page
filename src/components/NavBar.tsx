import { useEffect, useState } from "react";
import Logo from "../assets/flow-ai-logo.png";
import { MdMenu, MdOutlineClose } from "react-icons/md";

const COMPANY_LINKS = [
  { label: "Our Process", link: "#process" },
  { label: "Grow With Us", link: "#grow" },
  { label: "Services", link: "#services" },
  { label: "Testimonials", link: "#testimonial" },
  { label: "Download", link: "#download" },
  { label: "Blog", link: "#blog" },
  { label: "Join Newsletter", link: "#newsletter" },
] as const;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`fixed w-full z-50 transition ${scrolled && isOpen ? "bg-white" : scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="">
            <img src={Logo} alt="Flow AI logo" width="120px" />
          </div>

          <div className="gap-8 text-gray-600 font-semibold hidden lg:flex">
            {COMPANY_LINKS.map((link) => (
              <a key={link.label} className="cursor-pointer" href={link.link}>
                {link.label}
              </a>
            ))}
          </div>

          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <MdOutlineClose className="text-xl" /> : <MdMenu />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col px-6 pb-10 pt-25 space-y-4 bg-white border-t lg:hidden shadow-md fixed z-49 w-full">
          {COMPANY_LINKS.map((link) => (
            <a key={link.label} className="cursor-pointer" href={link.link}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default NavBar;
