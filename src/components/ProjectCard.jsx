import React from "react";
import { GlowEffect } from "./ui/GlowEffect";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-[350px]"
    >
      {/* <GlowEffect
        colors={["#FFFFFF", "#C959DD", "#FF2E54", "#FF9004"]}
        mode="static"
        blur="medium"
      /> */}
      <div className="relative rounded-lg  p-2 text-white dark:bg-[#5c5470] dark:text-[#dbd8e3]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
        />

        <div className="mt-4 text-center">
          <h2 className="text-2xl font-bold text-[#dbd8e3]">{project.title}</h2>
          <p className="text-black-300 mt-2">{project.description}</p>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex justify-center space-x-3 mt-4">
          {project.techStack.map((tech, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-1 px-3 py-1 bg-opacity-20 bg-gray-300 text-[#dbd8e3] rounded-full text-sm shadow-md"
            >
              <i className={tech.icon}></i> {tech.name}
            </motion.span>
          ))}
        </div>

        {/* GitHub Link Button */}
        <div className="mt-6 text-center">
          <a
            href={project.link}
            className="inline-block px-5 py-3 bg-gradient-to-r bg-[#2a2438] text-[#dbd8e3] font-bold rounded-full shadow-lg transition-transform transform hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> View on GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
