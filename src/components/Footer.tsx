import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Logo from "../assets/flow-ai-logo.png";

const COMPANY_LINKS = [
  { label: "Our Process", link: "#process" },
  { label: "Grow With Us", link: "#grow" },
  { label: "Services", link: "#services" },
  { label: "Testimonials", link: "#testimonial" },
] as const;

const RESOURCE_LINKS = [{label: "Download", link: "#download"}, {label: "Blog", link: "#blog"}, {label: "Join Our Newsletter", link: "#newsletter"}] as const;

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arosh-athukorala-4b1b67125/",
    icon: FaLinkedinIn,
  },
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "Twitter", href: "#", icon: FaTwitter },
  { label: "Instagram", href: "#", icon: FaInstagram },
] as const;

const Footer = () => {
  return (
    <footer className="max-w-1920 mx-auto bg-white">
      <div className="max-w-6xl mx-auto px-6 pt-18 pb-10">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.1fr_0.9fr_1fr_1.2fr]">
          <div className="max-w-xs">
            <img src={Logo} alt="Flow AI logo" width="150px" />
            <p className="mt-4 leading-8">
              Simple innate summer fat appear basket his desire joy.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold tracking-tight">Company</h4>
            <ul className="mt-4 space-y-4">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    key={link.label}
                    className="cursor-pointer"
                    href={link.link}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold tracking-tight">Resources</h4>
            <ul className="mt-4 space-y-4">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    key={link.label}
                    className="cursor-pointer"
                    href={link.link}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold tracking-tight">Follow Us</h4>
            <p className="mt-4 max-w-sm leading-8">
              Stay connected with our latest product updates, tutorials, and
              company news.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    className="inline-flex h-13 w-13 items-center justify-center rounded-full border border-slate-200 text-xl text-indigo-600 transition hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-300 pt-8 text-center text-hero-text">
          Copyright @ FlowAI {new Date().getFullYear()} . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
