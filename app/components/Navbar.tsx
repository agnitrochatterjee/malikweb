"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
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
  
  return (
    <div>
      <div className={`w-full bg-white flex py-3 flex-wrap justify-around ${poppins.className}`}>
        <Image 
            src="MalikAziz.svg"
            alt="Malik Aziz Logo"
            width={100}
            height={100}
        />
        <ul className="flex gap-[40px] text-sm">
          {NavBarItems.map((item, ind) => (
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
        <div className="flex gap-3 py-2">
            <Image 
                className="relative top-2 w-[20px] h-[20px] cursor-pointer"
                src="call.svg"
                alt="call icon"
                width={100}
                height={100}
            />
        <p className="mt-1">0449779218</p>
        <button className="rounded-lg w-[120px] h-[35px] item-center text-[12px] bg-[#B2DC18] text-black cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300">Book a Meeting</button>
        <Image 
            className="relative w-[30px] h-[30px] cursor-pointer"
            src="search1.svg"
            alt="`search icon"
            width={100}
            height={100}
        />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
