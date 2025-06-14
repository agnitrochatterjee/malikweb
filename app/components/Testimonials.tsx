"use client";

import Image from "next/image";
import Testimonial1 from "../assets/Testinomial-1.jpeg";
import Testimonial2 from "../assets/testinomial-2.jpg";
import Testimonial3 from "../assets/testinomial-1.jpg";

const testimonials = [
  {
    image: Testimonial1,
    name: "Liam Dawson, CEO, JetSpeed",
    description:
      "Their team helped us implement clear strategies for sustainable growth. Their digital expertise was a game changer.",
    highlight: false,
  },
  {
    image: Testimonial2,
    name: "Rachel Scarlett, Envato CEO",
    description:
      "Their business to develop successful digital ideas and strategies that engage and convert significant, targeted traffic develop successful digital ideas and strategies that",
    highlight: true,
  },
  {
    image: Testimonial3,
    name: "Alison Brown, COO, FreshCommerce",
    description:
      "We saw measurable traffic and engagement growth in just weeks. Their understanding of modern digital funnels is top tier.",
    highlight: false,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 max-w-7xl mx-auto w-full px-4 md:px-6">
      <h2 className="text-3xl font-semibold text-left md:text-center text-[#000000] mb-10">
        Testimonials
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`flex flex-col text-left rounded-2xl shadow-md p-6 w-full sm:w-[300px] lg:w-[350px] transition-transform hover:scale-105 ${
              testimonial.highlight
                ? "bg-[#B2DC18] text-white"
                : "bg-white text-gray-900"
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 relative rounded-full">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            </div>

            <h3
              className={`font-100 text-[25px] mb-3 ${
                testimonial.highlight ? "text-black" : "text-gray-900"
              }`}
            >
              {testimonial.name}
            </h3>

            <p
              className={`text-sm ${
                testimonial.highlight ? "text-white" : "text-gray-700"
              }`}
            >
              {testimonial.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;