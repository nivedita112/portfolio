import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, previewUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      whileHover={{ y: -15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="h-64 md:h-80 rounded-t-xl relative group cursor-pointer overflow-hidden"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className={`overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 transition-all duration-500 ${isHovered ? "bg-opacity-80" : "hidden"}`}>
          <Link href={previewUrl} className="group/link">
            <div className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white cursor-pointer group/link flex items-center justify-center">
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] group/link:text-white" />
            </div>
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
