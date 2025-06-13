"use client";

import clsx from "clsx";

export interface ServiceCard {
  number: number;
  title: string;
  description: string;
}

interface WhyChooseProps {
  services: ServiceCard[];
}

export const WhyChoose: React.FC<WhyChooseProps> = ({
  services,
}) => {
  return (
    <section className="py-16 px-4">

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
        {services.map((service, idx) => {
          const isGreen = (idx + 1) % 2 === 0;

          return (
            <div
              key={idx}
              className={clsx(
                "relative rounded-xl shadow p-6 transition duration-300 min-h-[240px] flex flex-col items-center justify-center hover:scale-105 transition-all",
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
              <h3 className="text-2xl font-semibold mb-4 text-black text-center">
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
    </section>
  );
};