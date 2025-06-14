'use client';

import { AboutSection } from "../components/AboutSection";
import { Banner } from "../components/Banner";
import FAQSection from "../components/FAQSection";
import { ServicesSection, ServiceCard } from "../components/ServicesSection";
import TrustSection from "../components/TrustSection";
import Testimonials from "../components/Testimonials";
import Publication from "../components/Publications";
import InfoBanner from "../components/InfoBanner"; // Adjust path as necessary
import image1 from "../assets/AboutImage.jpg";
import image2 from "../assets/Publications-2.jpg";
import image3 from "../assets/Publications-3.jpg";


const services: ServiceCard[] = [
  { number: 1, title: "Business Advisory", description: "Strategic guidance to help your business grow and thrive." },
  { number: 2, title: "Business Accounting", description: "Accurate financial management to keep your business on track." },
  { number: 3, title: "Tax Accounting", description: "Expert tax planning and compliance to minimize your tax liability." },
  { number: 4, title: "Bookkeeping Services", description: "Organized and precise bookkeeping to streamline your finances." },
  { number: 5, title: "SMSF Accountants", description: "Specialized advice for managing self-managed superannuation funds." },
  { number: 6, title: "Software Solutions", description: "Advanced software tools to simplify your accounting processes." },
];

const publications = [
  {
    id: 1,
    title: "5 reasons to purchase desktop computers.",
    description:
      "Hustle and Cashflow is a blog that aims to educate millennials on personal finance.",
    image: image1,
  },
  {
    id: 2,
    title: "Utilizing mobile technology in the field",
    description:
      "I think that you should be able to select more than one reason for...",
    image: image2,
  },
  {
    id: 3,
    title: "Success Story: Businessman in Harlem",
    description:
      "I think that you should be able to select more than one reason for...",
    image: image3,
  },
];


const Main = () => {
  return (
    <div>
      <Banner />
      <AboutSection />
      <ServicesSection
        services={services}
        onSeeMore={() => {
          console.log("Navigating to full services...");
        }}
      />
      <FAQSection />
      <TrustSection />
      <Testimonials />
       <section className="py-16 px-4">
      <h2 className="text-4xl font-semibold text-[#000000] text-left md:text-center">Latest News & Publications</h2>
      <div className="space-y-10 mt-10">
  {publications.map((item) => (
    <Publication key={item.id} {...item} />
  ))}
</div>

      <div className="text-center mt-4">
        <button
          className="bg-[#B2DC18] text-white font-medium px-6 py-2 rounded flex items-center gap-2 mx-auto cursor-pointer"
        >
          See More <span className="text-xl">→</span>
        </button>
      </div>
    </section>

      <InfoBanner />
    </div>
  );
};

export default Main;