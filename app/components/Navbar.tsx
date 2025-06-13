"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

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
      <div className={`min-w-screen flex flex-wrap gap-50 p-4 justify-around`}>
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
          <p className="mt-1">0449779218</p>
          <button className="rounded-lg w-[120px] h-[35px] item-center text-[12px] bg-[#B2DC18] text-black cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300">
            Book a Meeting
          </button>
        </div>

        {/* Hamburger Logo */}
        <div className="lg:hidden flex gap-4">
          <button onClick={() => setMenuOpen(!isMenuOpen)}>
            <HiOutlineMenu size={30} />
          </button>
        </div>
      </div>

      {/* {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )} */}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-white z-50 transform transition-all duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-base">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <HiOutlineX size={30} />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col ml-5 gap-3 text-lg">
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
      </div>
    </div>
  );
};

export default Navbar;
