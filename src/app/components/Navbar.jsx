// Navbar.jsx
"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { motion } from "framer-motion";

const navLinks = [
  {
    title: "Home",
    to: "herosection", // Adjust this to match the ID or name of your Hero section
  },
  {
    title: "About",
    to: "about", // Adjust this to match the ID or name of your About section
  },
  {
    title: "Certifications",
    to: "certifications", // Adjust this to match the ID or name of your Certifications section
  },
  {
    title: "Contact",
    to: "contact", // Adjust this to match the ID or name of your Contact section
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className="text-2xl md:text-5xl text-white font-semibold">
          <Image src="https://github.com/nivedita112/portfolio/blob/main/public/images/Logo.gif?raw=true" width={100} height={100} alt = "LOGO" />
        </div>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <NavLink to={link.to} title={link.title} />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
