import { Link } from "react-router";
import { MdArrowForward } from "react-icons/md";

interface GrowCardProps {
  imgSrc: string;
  title: string;
  subtitle: string;
}

const GrowCard: React.FC<GrowCardProps> = ({ imgSrc, title, subtitle }) => {
  return (
    <div className="flex-1 px-8 py-9 bg-white rounded-3xl">
      <img src={imgSrc} alt="" />
      <h4 className="font-bold text-2xl leading-14">{title}</h4>
      <p className="mb-5 text-hero-text">{subtitle}</p>
      <Link to="#" className="flex items-center gap-2 text-emerald-600">
        Read More <MdArrowForward />
      </Link>
    </div>
  );
};

export default GrowCard;
