// NavLink.jsx
import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const NavLink = ({ to, title }) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      offset={-70} // Adjust this offset based on your layout
      className="text-white group relative inline-block mb-2 cursor-pointer"
    >
      <motion.span
        className="relative"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.span>
      <motion.span
        className="absolute bottom-0 left-0 w-full h-1 bg-[#ac54f4] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 mt-2"
      ></motion.span>
    </Link>
  );
};

export default NavLink;
