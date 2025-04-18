"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt=""
          width={500}
          height={300}
          className="w-full"
        />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center
      justify-between z-50 ${
        isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
      }`}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            alt=""
            width={112}
            height={32}
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-whiteshadow-sm bg-opacity-50"
          }`}
        >
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Skills
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              Projects
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 
          rounded-full transition-all duration-300 hover:bg-gray-100"
          >
            Contact
            <Image src={assets.arrow_icon} alt="" width={12} height={12} />
          </a>
          <button
            className="block md:hidden ml-3 cursor-pointer"
            onClick={openMenu}
          >
            <Image
              src={assets.menu_black}
              alt=""
              width={24}
              height={24}
              className="w-6"
            />
          </button>
        </div>
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
        top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              width={20}
              height={20}
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#services">
              Skills
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#work">
              Projects
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
