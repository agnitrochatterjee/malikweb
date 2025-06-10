import Image from "next/image";
import { StaticImageData } from "next/image";

interface BlogCardProps {
  index: number;
  image: StaticImageData;
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
    <div className="relative w-100 h-80 rounded-2xl overflow-hidden shadow-md">
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 flex items-end">
        <div
          className={`w-full p-4 text-white ${
            isEven ? "text-black" : "text-black"
          }`}
        >
          <h3 className="text-[20px] mb-2 text-white">{title}</h3>
          <p className="text-[10px] mb-3 text-white">{description}</p>
          <button
            className={`px-4 py-2 rounded-[10px] text-sm font-medium flex items-center gap-2 ${
              !isEven ? "bg-white text-black" : "bg-[#B2DC18] text-white"
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