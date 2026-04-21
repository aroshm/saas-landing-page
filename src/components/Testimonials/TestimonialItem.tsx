import {
  MdFormatQuote,
  MdStar,
} from "react-icons/md";

interface TestimonialItemProps {
  testimonialImg: string;
  testimonialContent: string;
  testimonialName: string;
  testimonialPosition: string;
  testimonialLogo: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({
  testimonialImg,
  testimonialContent,
  testimonialName,
  testimonialPosition,
  testimonialLogo,
}) => {
  return (
    <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-12">
      <div className="mx-auto w-full max-w-104 shrink-0">
        <img
          src={testimonialImg}
          alt="Testimonial Img"
          className="w-full"
        />
      </div>

      <div className="flex-1">
        <MdFormatQuote className="text-red-400 text-6xl rotate-180 mb-5" />
        <div className="flex mb-5">
          <MdStar className="text-red-400 text-4xl" />
          <MdStar className="text-red-400 text-4xl" />
          <MdStar className="text-red-400 text-4xl" />
          <MdStar className="text-red-400 text-4xl" />
          <MdStar className="text-red-400 text-4xl" />
        </div>
        <p className="text-3xl font-semibold mb-12 leading-10">
          {testimonialContent}
        </p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xl font-semibold">{testimonialName}</p>
            <p className="text-hero-text">{testimonialPosition}</p>
          </div>
          <div>
            <img src={testimonialLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
