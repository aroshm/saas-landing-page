import TestimonialImg1 from "../assets/testimg-1.png";
import TestimonialImg2 from "../assets/testimg2.png";
import TestimonialImg3 from "../assets/testimg3.png";
import SegmentLogo from "../assets/segment-logo.png";

export interface Testimonial {
  testimonialImg: string;
  testimonialContent: string;
  testimonialName: string;
  testimonialPosition: string;
  testimonialLogo: string;
}

export const testimonials: Testimonial[] = [
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
];
