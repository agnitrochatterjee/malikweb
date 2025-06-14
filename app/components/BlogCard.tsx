// src/app/components/BlogCard.tsx
"use client";

import Image, { StaticImageData } from "next/image";

interface BlogCardProps {
  index: number;
  image: string | StaticImageData;
  title: string;
  description: string;
  buttonLabel: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  index,
  image,
  title,
  description,
  buttonLabel,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-md">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
        <div className="w-full p-4">
          <h3 className="text-[20px] mb-2 text-white font-semibold">{title}</h3>
          <p className="text-[10px] mb-3 text-white">{description}</p>
          <button
            className={`px-4 py-2 rounded-[10px] text-sm font-medium flex items-center gap-2 ${
              isEven ? "bg-[#B2DC18] text-white" : "bg-white text-black"
            }`}
          >
            {buttonLabel} →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;