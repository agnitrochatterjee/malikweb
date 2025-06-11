"use client";

import Image from "next/image";
import aboutImage from "../assets/AboutImage.jpg";

export const AboutSection = () => {
  return (
    <section className="w-full py-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <p className="text-sm font-semibold text-black mb-2">Who We Are</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            Experts in Financial<br />Excellence
          </h2>
          <p className="ext-gray-700 mb-4">
            At Malik Aziz & Co., our dedicated team simplifies your financial journey.
          </p>
          <p className="text-gray-700 mb-4">
            We offer services like business advisory, bookkeeping, tax planning, and cryptocurrency accounting.
          </p>
          <p className="text-gray-700">
            Serving clients on the Gold Coast, across Australia, and overseas, we help you stay compliant and maximize your financial potential.
          </p>
        </div>

        <div className="flex">
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src={aboutImage}
              alt="Financial expert teaching"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};