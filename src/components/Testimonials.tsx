import TestimonialItem from "./TestimonialItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import TestimonialImg1 from "../assets/testimg-1.png";
import TestimonialImg2 from "../assets/testimg2.png";
import TestimonialImg3 from "../assets/testimg3.png";
import SegmentLogo from "../assets/segment-logo.png";

const TestimonialList = [
  {
    testimonialImg: TestimonialImg1,
    testimonialContent:
      "Is be upon sang fond must shew. Really boy law county she unable her amber. friends you off its like like six. Among sex are leave law built now.",
    testimonialName: "AR Shakir",
    testimonialPosition: "CEO GetNextDesign",
    testimonialLogo: SegmentLogo,
  },
  {
    testimonialImg: TestimonialImg2,
    testimonialContent:
      "Is be upon sang fond must shew. Really boy law county she unable her amber. friends you off its like like six. Among sex are leave law built now.",
    testimonialName: "AR Shakir",
    testimonialPosition: "CEO GetNextDesign",
    testimonialLogo: SegmentLogo,
  },
  {
    testimonialImg: TestimonialImg3,
    testimonialContent:
      "Is be upon sang fond must shew. Really boy law county she unable her amber. friends you off its like like six. Among sex are leave law built now.",
    testimonialName: "AR Shakir",
    testimonialPosition: "CEO GetNextDesign",
    testimonialLogo: SegmentLogo,
  },
] as const;

const Testimonials = () => {
  return (
    <section className="relative max-w-1920 mx-auto pt-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="mb-4 text-center text-sm font-medium text-indigo-600">
          TESTIMONIALS
        </p>
        <h2 className="text-center text-[40px] font-bold leading-12 mb-10">
          Check what our clients are saying
        </h2>

        <div className="relative pb-20 md:pb-0">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center gap-6 md:inset-y-0 md:left-0 md:right-auto md:block md:w-104">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="testimonials-prev pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-800 shadow-[0_18px_40px_rgba(15,23,42,0.12)] cursor-pointer transition hover:scale-105 disabled:cursor-default disabled:opacity-45 md:absolute md:left-0 md:top-1/2 md:h-16 md:w-16 md:-translate-x-1/2 md:-translate-y-1/2"
            >
              <MdKeyboardArrowLeft className="text-3xl" />
            </button>

            <button
              type="button"
              aria-label="Next testimonial"
              className="testimonials-next pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-800 shadow-[0_18px_40px_rgba(15,23,42,0.12)] cursor-pointer transition hover:scale-105 disabled:cursor-default disabled:opacity-45 md:absolute md:right-0 md:top-1/2 md:h-16 md:w-16 md:translate-x-1/2 md:-translate-y-1/2"
            >
              <MdKeyboardArrowRight className="text-3xl" />
            </button>
          </div>

          <Swiper
            slidesPerView={1}
            navigation={{
              prevEl: ".testimonials-prev",
              nextEl: ".testimonials-next",
            }}
            modules={[Navigation]}
          >
            {TestimonialList.map((item) => (
              <SwiperSlide key={item.testimonialImg}>
                <TestimonialItem
                  testimonialImg={item.testimonialImg}
                  testimonialContent={item.testimonialContent}
                  testimonialName={item.testimonialName}
                  testimonialPosition={item.testimonialPosition}
                  testimonialLogo={item.testimonialLogo}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
