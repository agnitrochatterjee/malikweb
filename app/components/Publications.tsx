
import Image from "next/image";
import { StaticImageData } from "next/image";

export interface PublicationProps {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

const Publication: React.FC<PublicationProps> = ({
  id,
  title,
  description,
  image,
}) => {
  const isEven = id % 2 === 0;

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isEven ? "bg-[#B2DC18] text-white" : "bg-white text-black"
      } ${
        !isEven ? "md:flex-row-reverse" : ""
      } rounded-2xl shadow w-full max-w-6xl mx-auto mb-10 p-6`}
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

      <div className="w-full md:w-1/2 mt-12 flex-1 flex-col justify-center p-4">
        <h2 className="text-5xl mb-4">{title}</h2>
        <p className="mb-6 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Publication;