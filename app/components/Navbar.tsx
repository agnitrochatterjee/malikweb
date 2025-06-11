"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Navbar = () => {
  const Router = useRouter();
  const pathname = usePathname();

  const NavBarItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/About" },
    { name: "Services", path: "/Services" },
    { name: "Blogs", path: "/Blogs" },
    { name: "Contact", path: "/Contact" },
  ];

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <div className={`min-w-screen flex flex-wrap p-4 justify-around`}>
        {/* Logo Section */}
        <Image
          src="MalikAziz.svg"
          alt="Malik Aziz Logo"
          width={100}
          height={100}
          className="w-30 lg:w-35 h-auto cursor-pointer"
          onClick={() => Router.push("/")}
        />

        {/* Middle Section */}
        <ul className="hidden lg:flex gap-[40px] text-sm">
          {NavBarItems.map((item) => (
            <li
              key={item.path}
              onClick={() => Router.push(`${item.path}`)}
              className={`py-3 relative cursor-pointer ${
                pathname === `${item.path}`
                  ? "text-[#B2DC18]"
                  : "text-black hover:text-[#B2DC18]"
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden lg:flex gap-3 py-2">
          <Image
            className="relative top-2 w-[20px] h-[20px] cursor-pointer"
            src="call.svg"
            alt="call icon"
            width={100}
            height={100}
          />
          <p className="mt-1">0449779218</p>
          <button className="rounded-lg w-[120px] h-[35px] item-center text-[12px] bg-[#B2DC18] text-black cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300">
            Book a Meeting
          </button>
          <Image
            className="relative w-[30px] h-[30px] cursor-pointer"
            src="search1.svg"
            alt="`search icon"
            width={100}
            height={100}
          />
        </div>

        {/* Hamburger Logo */}
        <div className="lg:hidden flex gap-4">
        <Image
              className="relative top-2 w-[30px] h-[30px] cursor-pointer"
              src="search1.svg"
              alt="`search icon"
              width={100}
              height={100}
            />
          <button onClick={() => setMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <HiOutlineX size={30} />
            ) : (
              <HiOutlineMenu size={30} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          {NavBarItems.map((item) => (
            <div
              key={item.path}
              onClick={() => Router.push(`${item.path}`)}
              className={`cursor-pointer text-sm ${
                pathname === item.path
                  ? "text-[#B2DC18]"
                  : "text-black hover:text-[#B2DC18]"
              }`}
            >
              {item.name}
            </div>
          ))}

          <div className="flex justify-around gap-3 px-5 py-2">
            <div className="flex gap-3">
            <Image
              className="relative top-2 w-[20px] h-[20px] cursor-pointer"
              src="call.svg"
              alt="call icon"
              width={100}
              height={100}
            />
            <p className="mt-1">0449779218</p>
            </div>
            <button className="rounded-lg w-[120px] h-[35px] item-center text-[12px] bg-[#B2DC18] text-black cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300">
              Book a Meeting
            </button>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
