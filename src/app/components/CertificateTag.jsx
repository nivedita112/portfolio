import React from "react";
import { motion } from "framer-motion";

const CertificateTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  const buttonVariants = {
    heartbeat: { scale: [1, 1.2, 1], transition: { duration: 0.8, repeat: Infinity } },
  };

  return (
    <motion.button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer mb-4`}
      whileHover="heartbeat"
      onClick={() => onClick(name)}
      variants={buttonVariants}
      initial={{ scale: 1 }}
    >
      {name}
    </motion.button>
  );
};

export default CertificateTag;
