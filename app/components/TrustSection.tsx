import Image from "next/image";
import { FaRegSmile, FaRegClock, FaRegStar } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { FiSunrise } from "react-icons/fi";
import { RiLuggageDepositLine } from "react-icons/ri";
import TrustImage from "../assets/TrustImage.jpg";

const features = [
  { label: "Trust", icon: <FaRegSmile size={18} />, active: false },
  { label: "Accuracy", icon: <FaRegClock size={18} />, active: true },
  { label: "Confidentiality", icon: <CiLock size={18} />, active: false },
  { label: "Expertise", icon: <FaRegStar size={18} />, active: true },
  { label: "Experience", icon: <FiSunrise size={18} />, active: false },
  {
    label: "Professional",
    icon: <RiLuggageDepositLine size={18} />,
    active: true,
  },
];

const TrustSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-12 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={TrustImage}
            alt="Office discussion"
            className="w-full h-full object-cover max-h-[400px] md:max-h-full"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 space-y-6 text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
            Trust is the <br /> foundation of <br /> great service
          </h2>

          <p className="text-gray-600 max-w-xl">
            We provide income tax, accounting and bookkeeping services to
            individuals, small businesses and corporate clients. Our services
            are tailored to the unique needs of each client. We work as part of
            your team, understanding your needs and what matters to you.
          </p>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4 max-w-md">
            {features.map(({ label, icon, active }) => (
              <div key={label} className="flex items-center gap-3">
                <span
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    active
                      ? "bg-[#B2DC18] text-white"
                      : "bg-white text-gray-500"
                  } text-lg shadow-md`}
                >
                  {icon}
                </span>
                <span
                  className={`font-semibold ${
                    active ? "text-gray-900" : "text-gray-700"
                  }`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;