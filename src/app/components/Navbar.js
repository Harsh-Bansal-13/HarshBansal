import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../images/logo.png";
import Navlink from "./Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
const navLinks = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Profiles", href: "#profiles" },
  //   { title: "Hire Me", href: "#contact" },
];
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="z-50 fixed bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 w-full border-b-slate-300 border-b-2">
      <div className="flex flex-wrap items-center justify-between mx-auto p-8 py-6">
        <Link href={"/"}>
          {/* <Image src={Logo} className="w-8 z-1"></Image> */}
          <div className="font-extrabold text-2xl cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-800">
            &lt;Harsh Bansal/&gt;
          </div>
        </Link>
        <div className="flex items-center justify-center md:hidden">
          {!navOpen ? (
            <button
              className="text-slate-100"
              onClick={() => {
                setNavOpen(true);
              }}
            >
              <Bars3Icon className="h-8 w-8" />
            </button>
          ) : (
            <div>
              <div className="w-full flex justify-end">
                <button
                  className="text-slate-100"
                  onClick={() => {
                    setNavOpen(false);
                  }}
                >
                  <XMarkIcon className="h-8 w-8" />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto text-white font-bold">
          <ul className="flex gap-2">
            {navLinks.map((link, index) => (
              <motion.li whileTap={{ scale: 0.9 }} key={index}>
                <Navlink href={link.href} title={link.title}></Navlink>
              </motion.li>
            ))}
            <motion.li whileTap={{ scale: 0.9 }}>
              <Link
                href={"#contact"}
                className="border-1 rounded-md px-2 py-3 w-full gradient-border text-white hover:bg-slate-800"
              >
                Hire Me
              </Link>
            </motion.li>
          </ul>
        </div>
      </div>
      {navOpen && (
        //   <div className="">
        <ul className="flex flex-col gap-2 items-center justify-center md:hidden p-4 pt-0 m-0 mb-2">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="flex items-center justify-start text-white"
            >
              <Navlink href={link.href} title={link.title}></Navlink>
            </li>
          ))}
          <li>
            <Link
              href={"#contact"}
              className="border-1 px-2 py-3 w-full rounded-md gradient-border text-white hover:bg-slate-800"
            >
              Hire Me
            </Link>
          </li>
        </ul>
        //   </div>
      )}
    </nav>
  );
};

export default Navbar;
