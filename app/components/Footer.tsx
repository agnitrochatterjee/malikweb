// components/Footer.tsx
import Image from "next/image";
import { Poppins } from "next/font/google";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Footer section items
const OurServices_items = [
  "Business Advisory",
  "Business Accounting",
  "Tax Accounting",
  "Bookkeeping Services",
  "SMSF Accountants",
  "Software Solutions",
  "QBCC Annual Reporting",
  "Crypto Accountant",
];

const contactDetails = [
  {
    title: "Get Closer",
    value: "PO Box 795 Labrador, Qld 4215",
  },
  {
    title: "Work With Us",
    value: "Email: reception@malikaziz.com.au",
  },
  {
    title: "For Consulting",
    value: "Phone: 0449779218",
  },
  {
    title: "ABN",
    value: "46 652 778 259",
  },
];

const socialLinks = [
  { icon: <FaFacebookF /> },
  { icon: <FaInstagram /> },
  { icon: <FaLinkedinIn /> },
  { icon: <FaTwitter /> },
];

// Main Footer Component
const Footer = () => {
  return (
    <div className={`w-full relative z-0 ${poppins.className}`}>
      <footer className="bg-[#E9E9E9] text-black p-10 mt-12">
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-4 lg:mb-0">
            <Image
              className="w-50 h-auto mb-2"
              src="/MalikAziz.svg"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>

          {/* Our Services Section */}
          <div>
            <h5 className="font-bold mb-3">Our Services</h5>
            <ul>
              {OurServices_items.map((section, index) => (
                <li
                  key={index}
                  className="text-sm hover:text-[#B2DC18] cursor-pointer mb-2"
                >
                  {section}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us section */}
          <div>
            <h5 className="font-bold mb-3">Contact Us</h5>
            {contactDetails.map((item, index) => (
              <p key={index} className="text-sm mb-2">
                <span className="font-semibold text-sm">{item.title}</span>
                <br />
                {item.value}
              </p>
            ))}
          </div>

          {/* Follow Us section */}
          <div>
            <h5 className="font-bold mb-3">Follow Us</h5>
            <div className="flex gap-2">
              {socialLinks.map((item, index) => (
                <div key={index} className="hover:text-[#B2DC18] cursor-pointer">
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full place-self-center mt-10 border-t border-gray-700 pt-4" />

        {/* Last line of the Footer Component */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row justify-center items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Motion Creative Cloud Inc.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="/privacy" className="hover:text-[#B2DC18] ml-5">
              Privacy
            </a>
            <a href="/terms" className="hover:text-[#B2DC18] ml-2">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
