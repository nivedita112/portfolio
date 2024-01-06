"use client";
import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from 'next/image';

const interestsData = [
  {
    id: 1,
    title: "UI / UX Design",
    icon: "https://raw.githubusercontent.com/nivedita112/portfolio/ddbf3fab2f0509b9c12eadbee2740662f7f503dc/public/images/card1.svg",
    description: "Passionate about crafting intuitive and visually appealing user experiences to enhance digital interactions.",
  },
  {
    id: 2,
    title: "Data Analytics",
    icon: "https://raw.githubusercontent.com/nivedita112/portfolio/ddbf3fab2f0509b9c12eadbee2740662f7f503dc/public/images/card2.svg",
    description: " Proficient in extracting valuable insights from data, employing statistical analysis and visualization techniques to inform strategic decision-making.   ",
  },
  {
    id: 3,
    title: "Data Science",
    icon: "https://raw.githubusercontent.com/nivedita112/portfolio/ddbf3fab2f0509b9c12eadbee2740662f7f503dc/public/images/card3.svg",
    description: "Dedicated to leveraging advanced analytics and machine learning to extract meaningful patterns from complex datasets, contributing to data-driven solutions and innovation.",
  },
];

const InterestCard = ({ title, icon, description }) => {
    const controls = useAnimation();
  
    const handleHover = async () => {
      await controls.start({ y: -10, backgroundColor: "#8345be" });
    };
  
    const handleHoverExit = async () => {
      await controls.start({ y: 0, backgroundColor: "#272627" }); // Set default background color here
    };
  
    return (
      <motion.li
        className="rounded-xl overflow-hidden cursor-pointer"
        initial={{ y: 0, backgroundColor: "#272627" }} // Set default background color here
        animate={controls}
        whileHover="hover"
        onHoverStart={handleHover}
        onHoverEnd={handleHoverExit}
        variants={{
          hover: {
            y: -10,
            backgroundColor: "#4B5563",
            transition: {
              duration: 0.3,
              type: "keyframes",
              ease: [0.4, 0, 0.2, 1], // cubic-bezier(0.4, 0, 0.2, 1)
            },
          },
        }}
      >
        <div className="h-16 w-16 p-4">
          <Image src={icon} alt={`${title} Icon`} width={100} height={100} />
        </div>
        <div className="p-4">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-white">{description}</p>
        </div>
      </motion.li>
    );
  };
  

const InterestsSection = () => {
  const ref = useRef(null);

  return (
    <section id="interests" className="mb-14">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Interests
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-16">
        {interestsData.map((interest) => (
          <InterestCard
            key={interest.id}
            title={interest.title}
            icon={interest.icon}
            description={interest.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default InterestsSection;
