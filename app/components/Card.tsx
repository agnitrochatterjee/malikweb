import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { FaArrowRight } from "react-icons/fa";

export interface CardProps {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

export default function Card({ id, title, description, image }: CardProps) {
  const isEven = id % 2 === 0;

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isEven ? "bg-[#B2DC18] text-white" : "bg-white text-black"
      } ${
        !isEven ? "md:flex-row-reverse" : ""
      } rounded-2xl shadow w-full max-w-5xl mx-auto mb-10 p-6`}
    >
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="w-full h-auto rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:ml-5">
        <div className="flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl mb-4">{title}</h2>
          <p className="mb-6 text-base">{description}</p>
        </div>
        <button
          className={`mt-2 flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg w-fit transition-all duration-300 ${
            isEven
              ? "bg-white text-black hover:bg-gray-100"
              : "bg-[#B2DC18] text-white"
          } cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300`}
        >
          Learn More <FaArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}
