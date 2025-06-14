"use client";

import { useState } from "react";
import Image from "next/image";
import Banner from "../assets/Banner.jpg";

interface ServiceItem {
  title: string;
  content: string;
}

const servicesData: ServiceItem[] = [
  {
    title: "Medical",
    content:
      "Comprehensive accounting and tax services for healthcare professionals. From solo practitioners to large medical practices. Ensuring your financial health is as robust as your patients'.",
  },
  {
    title: "Real Estate",
    content:
      "Accounting services for agents, brokers, and developers. Maintain compliance with industry-specific tax laws. Maximize profitability and streamline operations.",
  },
  {
    title: "Freelancers",
    content:
      "Expert support to manage irregular freelance income. Optimize taxes and stay ahead of deadlines. Maintain financial clarity and business growth.",
  },
  {
    title: "Manufacturing",
    content:
      "Customized solutions for manufacturers' unique needs. Manage cost accounting and inventory accurately. Ensure efficient and transparent financial reporting.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleIndex = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="max-w-6xl mx-auto my-10 p-4 flex flex-col md:flex-row gap-6 font-poppins bg-[#f4f4f4]">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col justify-center space-y-6 md:mr-5">
        <h2 className="text-3xl md:text-5xl text-gray-900">
          We have experts in a range of industries including:
        </h2>
        <p className="text-gray-700">
          Our expert team provides specialized accounting services to ensure
          compliance and optimize financial performance across various sectors.
        </p>
        <div className="space-y-3">
          {servicesData.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                role="button"
                tabIndex={0}
                onClick={() => toggleIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggleIndex(index);
                }}
                className={`rounded-lg p-4 transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? "bg-[#B2DC18] text-white border-[#B2DC18]"
                    : "bg-[#f4f4f4] text-black border-gray-300"
                }`}
              >
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-black">{item.title}</span>
                  <span className="text-2xl text-black">
                    {isActive ? "−" : "+"}
                  </span>
                </div>
                {isActive && (
                  <p className="mt-2 text-sm transition-all">{item.content}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex items-center justify-center md:items-stretch md:ml-5">
        <div className="w-full h-[200px] md:h-auto rounded-xl overflow-hidden shadow-lg">
          <Image
            src={Banner}
            alt="Accounting Expert"
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;