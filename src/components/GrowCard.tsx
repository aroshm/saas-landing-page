import { Link } from "react-router";
import { MdArrowForward } from "react-icons/md";

interface GrowCardProps {
  imgSrc: string;
  title: string;
  subtitle: string;
}

const GrowCard: React.FC<GrowCardProps> = ({ imgSrc, title, subtitle }) => {
  return (
    <div className="flex-1 px-4 py-3 lg:px-8 lg:py-9 bg-white rounded-3xl shadow-lg xl:shadow-none">
      <img src={imgSrc} alt="" />
      <h4 className="mb-2.5 lg:mb-0 font-bold text-2xl leading-7 lg:leading-14">
        {title}
      </h4>
      <p className="mb-5 text-hero-text">{subtitle}</p>
      <Link to="#" className="flex items-center gap-2 text-emerald-600">
        Read More <MdArrowForward />
      </Link>
    </div>
  );
};

export default GrowCard;
