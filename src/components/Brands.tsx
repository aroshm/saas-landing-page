import OpenZeppeline from "../assets/openzeppelin-logo.png";
import Oracle from "../assets/oracle-logo.png";
import Morpheus from "../assets/morpheus-logo.png";
import Samsung from "../assets/samsung-logo.png";
import Monday from "../assets/monday-logo.png";
import Segment from "../assets/segment-logo.png";
import Protone from "../assets/protonet-logo.png";

const brandLogos = [
  { name: "OpenZeppelin", src: OpenZeppeline },
  { name: "Oracle", src: Oracle },
  { name: "Morpheus", src: Morpheus },
  { name: "Samsung", src: Samsung },
  { name: "Monday.com", src: Monday },
  { name: "Segment", src: Segment },
  { name: "Protonet", src: Protone },
] as const;

const Brands = () => {
  return (
    <section className="px-6 py-16 text-center border-b border-b-gray-200">
      <p className="text-xl mb-10">
        Over 32k+ software businesses growing with FlowAI
      </p>

      <div className="overflow-x-auto">
        <ul className="flex items-center gap-10 min-w-max justify-center md:justify-between">
          {brandLogos.map(({ name, src }) => (
            <li key={name}>
              <img
                src={src}
                alt={`${name} logo`}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Brands;
