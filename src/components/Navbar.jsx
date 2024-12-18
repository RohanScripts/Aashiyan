import logo from "../assets/logo.png";
import { assets } from "../assets/assets";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // try below if any error in scrolling
  // useEffect(() => {
  //   if (showMobileMenu) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [setShowMobileMenu]);
  return (
    <div className="top-0 left-0 z-10 w-full absolute ">
      <div className="flex justify-between items-center container mx-auto bg-transparent px-5 ">
        <img src={logo} className="cursor-pointer w-32" alt="" srcSet="" />
        <ul className="hidden md:flex gap-5 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>
        <button className="text-white hidden md:block bg-gradient-to-r from-pink-500 to-violet-500 px-7 py-1.5 rounded-full ">
          Sign Up
        </button>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-5 cursor-pointer"
          alt=""
        />
      </div>
      {/* for mobile screen */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "w-full fixed" : "w-0 h-0"
        }  overflow-hidden bg-gray-400 transition-all top-0 bottom-0`}
      >
        <div
          onClick={() => setShowMobileMenu(false)}
          className="flex justify-end p-4 cursor-pointer"
        >
          <img src={assets.cross_icon} className="w-5" alt="" />
        </div>
        <ul className="flex flex-col items-center gap-2  text-black">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Header"
            className="rounded-full px-4 py-2 inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="rounded-full px-4 py-2 inline-block"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Projects"
            className="rounded-full px-4 py-2 inline-block"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="rounded-full px-4 py-2 inline-block"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
