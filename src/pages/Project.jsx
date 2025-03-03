import React from "react";
import { motion } from "framer-motion";
import projectimg from "../assets/project/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration.png";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export const Project = () => {
  return (
    <>
      <section className="text-white flex items-center justify-center min-h-screen">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:gap-16 px-6 md:px-24 lg:px-32">
          {/* Image Section */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              className="max-w-[350px] md:max-w-[450px] lg:max-w-[500px] object-cover rounded-lg shadow-xl"
              src={projectimg}
              alt="Education"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Projects</h1>
            <p className="mt-4 text-lg font-semibold text-gray-300 sm:text-xl">
              I create modern, scalable, and efficient applications using the
              latest technologies to deliver seamless user experiences.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="min-h-screen  text-white flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold text-white mb-8">My Projects</h1>

        <motion.div 
          className="grid gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </>
  );
};
