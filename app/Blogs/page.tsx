
"use client";
import BlogCard from "../components/BlogCard";
import Testimonial1 from "../assets/AboutImage.jpg";
import Testimonial2 from "../assets/Frame 673.jpg";
import Testimonial3 from "../assets/Frame 675.jpg";
import Testimonial4 from "../assets/Banner.jpg";
import Testimonial5 from "../assets/Frame 672.jpg";
import Testimonial6 from "../assets/Frame 673 (1).jpg";

const blogData = [
  {
    image: Testimonial1,
    title: "5 reasons to purchase desktop computers",
    description:
      "Hustle and cashflow is a blog that aims to educate millennials on personal finance. What allows to differ from other",
    buttonLabel: "Continue Reading",
  },
  {
    image: Testimonial2,
    title: "Utilizing mobile technology in the field",
    description:
      "You want to succeed, surround yourself with the right kind of people who will support and encourage you all the way.",
    buttonLabel: "Continue Reading",
  },
  {
    image: Testimonial3,
    title: "Success Story: Businessman in Harlem",
    description:
      "You want to succeed, surround yourself within the right kind of people who will support and encourage you all the way.",
    buttonLabel: "Continue Reading",
  },
  {
    image: Testimonial4,
    title: "Working from home? Let’s get started.",
    description:
      "Success needs hard work. Don’t listen to these quick rich quick schemes.",
    buttonLabel: "Continue Reading",
  },
  {
    image: Testimonial5,
    title: "The Ultimate Success Formula – How?",
    description:
      "Successful people do not see failures as failures. They see them as important learning lessons.",
    buttonLabel: "Continue Reading",
  },
  {
    image: Testimonial6,
    title: "Building Intelligent Transportation Systems",
    description:
      "Urban mobility is rapidly evolving, and intelligent transportation systems (ITS) are at the forefront of this transformation.",
    buttonLabel: "Continue Reading",
  },
];

export default function HomePage() {
  return (
    <div className="px-4 md:px-20 py-10">
      <h2 className="text-center text-5xl font-base mb-10 text-black">Blog</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {blogData.map((card, index) => (
  <BlogCard key={index} index={index} {...card} />
))}

      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-[#B2DC18] text-white px-6 py-2 rounded-[10px] font-medium text-sm flex items-center gap-2">
          See More →
        </button>
      </div>
    </div>
  );
}