import React from "react";
import { motion } from "framer-motion";
import exampleImage from "../assets/example.jpg";

export const Experience = () => {
  return (
    <motion.section
      className="mt-40 flex flex-col items-center justify-center py-16 px-6 sm:px-8 md:px-12 lg:px-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center text-center lg:flex-row lg:text-left">
        <motion.h2
          className="text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <hr className="border-t-4 border-gray-300 w-16 lg:border-l-4 lg:h-80 lg:w-0 mx-7" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <motion.div
            className="lg:w-1/2 text-left space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white">
                Freelance MERN Stack Developer
              </h3>
              <p className="text-gray-400 text-sm">Dec 2024 – Present</p>

              {/* Sequential list items */}
              <motion.ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
                {["Developed scalable and secure web applications.",
                  "Built custom APIs and integrated third-party services.",
                  "Optimized performance and database queries for efficiency.",
                  "Applied secure coding practices to prevent vulnerabilities."]
                  .map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                    >
                      {item}
                    </motion.li>
                  ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="lg:w-1/2 flex justify-center mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              src={exampleImage}
              alt="Freelance Development"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
