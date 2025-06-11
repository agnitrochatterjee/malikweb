"use client";

import clsx from "clsx";

export interface ServiceCard {
  number: number;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  services: ServiceCard[];
  onSeeMore?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onSeeMore,
}) => {
  return (
    <section className="max-w-8xl mx-auto py-16 px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
        <p className="text-gray-600 mt-4 text-lg">
          Comprehensive Financial Solutions for Your Needs
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
        {services.map((service, idx) => {
          const isGreen = (idx + 1) % 2 === 0;

          return (
            <div
              key={idx}
              className={clsx(
                "relative rounded-xl shadow p-6 hover:scale-105 transition-all duration-300 min-h-[240px] flex flex-col items-center justify-center",
                isGreen ? "bg-[#B2DC18]" : "bg-white"
              )}
            >
              {/* Number Bubble */}
              <div
                className={clsx(
                  "absolute -top-6 left-8 rounded-full w-[52px] h-[52px] flex items-center justify-center font-semibold text-[20px] shadow-md",
                  isGreen ? "bg-white text-black" : "bg-[#B2DC18] text-white"
                )}
              >
                {String(service.number).padStart(2, "0")}.
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4 text-black">
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={clsx(
                  "text-lg leading-relaxed text-center",
                  isGreen ? "text-white" : "text-gray-700"
                )}
              >
                {service.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* See More Button */}
      {onSeeMore && (
        <div className="text-center mt-8">
          <button
            onClick={onSeeMore}
            className="bg-[#B2DC18] text-white font-medium px-6 py-2 rounded flex items-center gap-2 mx-auto cursor-pointer"
          >
            See More <span className="text-xl">→</span>
          </button>
        </div>
      )}
    </section>
  );
};