"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "AI and ML Intern",
    description: "In my internship, I actively contributed to the development and enhancement of artificial intelligence and machine learning models. I worked on tasks such as data analysis, model training, and testing, collaborating closely with the team to optimize the performance of AI systems.",
    image: "/images/projects/AIMLin.jpg",
    tag: ["Internship"],
    previewUrl: "images/projects/AIMLin.jpg",
  },
  {
    id: 2,
    title: "Gustovalley's Industry 4.0 Intern",
    description: "In my role as an Industry 4.0 intern, I actively contributed to implementing cutting-edge technologies like IoT, artificial intelligence, and automation, fostering efficiency and connectivity in industrial processes, thereby driving digital transformation within the industry.",
    image: "/images/projects/Gustoin.jpg",
    tag: ["Internship"],
    previewUrl: "/images/projects/Gustoin.jpg",
  },
  {
    id: 3,
    title: "Data Science Intern",
    description: "As a Data Science Intern, I played a pivotal role in analyzing and interpreting complex datasets, developing machine learning models, and contributing to data-driven decision-making processes to enhance organizational insights and efficiency.",
    image: "/images/projects/DSI.jpg",
    tag: ["Internship"],
    previewUrl: "/images/projects/DSI.jpg",
  },
  {
    id: 4,
    title: "Data Analytics Intern",
    description: "As a Data Analytics Intern, I contributed to extracting valuable insights from data, employing statistical analysis and visualization techniques. I played a key role in interpreting trends and patterns, aiding in informed business decision-making and optimizing data-driven strategies.",
    image: "/images/projects/DAI.jpg",
    tag: ["Internship"],
    previewUrl: "/images/projects/DAI.jpg",
  },
  {
    id: 5,
    title: "Python Essentials 1 by Cisco",
    description: "In 'Python Essentials 1' by Cisco, I gained fundamental skills in Python programming, covering essential concepts such as syntax, data structures, and algorithms, providing a solid foundation for real-world applications.",
    image: "/images/projects/pythoncis.jpg",
    tag: ["Languages"],
    previewUrl: "/images/projects/pythoncis.jpg",
  },
  {
    id: 6,
    title: "Basics of Python by Infosys Springboard",
    description: "In 'Basics of Python' by Infosys Springboard, I acquired foundational knowledge in Python programming, exploring key concepts like syntax, data structures, and algorithms, fostering a comprehensive understanding for practical use.",
    image: "/images/projects/pythoninfo.jpg",
    tag: ["Languages"],
    previewUrl: "/images/projects/pythoninfo.jpg",
  },
  {
    id: 7,
    title: "C++ for beginners by Infosys Springboard",
    description: "In 'C++ Programming' by Infosys Springboard, I gained proficiency in C++ language, covering fundamental principles and advanced features, enabling me to develop robust and efficient C++ applications.",
    image: "/images/projects/cppinfo.jpg",
    tag: ["Languages"],
    previewUrl: "/images/projects/cppinfo.jpg",
  },
  {
    id: 8,
    title: "30 days master class on java programming",
    description: "In the '30 Days Master Class on Java Programming' by Pantech eLearning, I gained in-depth insights into Java programming, covering fundamental principles and advanced methodologies, equipping me with the skills to create robust and scalable Java applications.",
    image: "/images/projects/java.jpg",
    tag: ["Languages"],
    previewUrl: "/images/projects/java.jpg",
  },
  {
    id: 9,
    title: "AWS Academy Cloud Foundations",
    description: "In the 'AWS Academy Cloud Foundations' course, I gained essential skills and insights into cloud computing, covering fundamental AWS services and best practices for building secure and scalable applications in the cloud.",
    image: "/images/projects/aws.jpg",
    tag: ["Courses"],
    previewUrl: "/images/projects/aws.jpg",
  },
  {
    id: 10,
    title: "Certified System Administrator",
    description: "In the 'Certified System Administrator' course by Salesforce, I acquired comprehensive knowledge and skills in administering Salesforce applications, configuring and managing users, security, and data, ensuring optimal performance of the Salesforce platform.",
    image: "/images/projects/csa.jpg",
    tag: ["Courses"],
    previewUrl: "/images/projects/csa.jpg",
  },
  {
    id: 11,
    title: "Front End Technologies",
    description: "In the 'Front End Technologies' course by the Department of Information Technology at PVPSIT, I gained expertise in various front-end technologies, including HTML, CSS, and JavaScript, enabling me to develop engaging and responsive user interfaces for web applications.",
    image: "/images/projects/Frontend.jpg",
    tag: ["Courses"],
    previewUrl: "/images/projects/Frontend.jpg",
  },
  {
    id: 12,
    title: "Object-Oriented Analysis, Design, and Programming with UML",
    description: "In the 'Object-Oriented Analysis, Design, and Programming with UML' course by Infosys Springboard, I honed my skills in applying UML methodologies to analyze, design, and implement software systems, fostering a comprehensive understanding of object-oriented programming principles.",
    image: "/images/projects/UML.jpg",
    tag: ["Courses"],
    previewUrl: "/images/projects/UML.jpg",
  },
  {
    id: 13,
    title: "Data Visualization with Tableau",
    description: "In the 'Data Visualization with Tableau' course by Infosys Springboard, I gained proficiency in leveraging Tableau to create impactful data visualizations, enabling effective communication of insights and trends through interactive and dynamic dashboards.",
    image: "/images/projects/Tableau.jpg",
    tag: ["Courses"],
    previewUrl: "/images/projects/Tableau.jpg",
  },
  {
    id: 14,
    title: "Smart Interviews",
    description: "Certified Smart coder by Smart Interviews with a global rank of 14619",
    image: "/images/projects/SI.jpg",
    tag: ["Courses"],
    previewUrl: "/images/projects/SI.jpg",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Internship");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="certifications">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Certifications
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      <ProjectTag
          onClick={handleTagChange}
          name="Internship"
          isSelected={tag === "Internship"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Languages"
          isSelected={tag === "Languages"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Courses"
          isSelected={tag === "Courses"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

