import { FaApple, FaGooglePlay } from "react-icons/fa";

const STORE_LINKS = [
  {
    label: "Playstore",
    href: "#",
    icon: FaApple,
    className: "bg-indigo-600 text-white hover:bg-indigo-600",
  },
  {
    label: "Google Play",
    href: "#",
    icon: FaGooglePlay,
    className: "bg-slate-950 text-white hover:bg-slate-800",
  },
] as const;

const DownloadApp = () => {
  return (
    <section
      className="relative max-w-1920 mx-auto bg-custom-grey overflow-hidden
  [clip-path:polygon(0%_0%,100%_0%,100%_75%,50%_100%,0%_75%)]

  

  before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-30
  before:bg-white before:[clip-path:polygon(0%_0%,100%_0%,100%_50%,50%_100%,0%_75%)]"
    >
      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-30 md:pt-52 md:pb-45">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-medium text-indigo-600 uppercase">
            Project management app
          </p>
          <h3 className="mb-5 text-[42px] font-bold leading-12">
            Download our app and start your free trail to get started today!
          </h3>
          <p className="mx-auto max-w-3xl text-xl text-hero-text">
            End-to-end payments and financial management in a single solution.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
            {STORE_LINKS.map((store) => {
              const Icon = store.icon;

              return (
                <a
                  key={store.label}
                  href={store.href}
                  className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-4xl font-medium transition cursor-pointer ${store.className}`}
                >
                  <Icon className="text-xl" />
                  <span>{store.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
