import React from "react";
import { motion } from "framer-motion";

export const Contect = () => {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-2xl"
      >
        <h1 className="text-white text-center pb-8 font-light text-4xl sm:text-5xl lg:text-6xl">
          Contact Me
        </h1>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-full">
            <div className="flex flex-col md:flex-row gap-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="w-full md:w-1/2"
              >
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  required
                  className="my-2 py-2 px-4 rounded-md bg-[#1c1825] text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="w-full md:w-1/2"
              >
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="my-2 py-2 px-4 rounded-md bg-[#1c1825] text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                required
                className="my-2 py-2 px-4 rounded-md bg-[#1c1825] text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Say Something"
                required
                className="my-2 py-2 px-4 rounded-md bg-[#1c1825] text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
              />
            </motion.div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="border-2 text-md mt-5 rounded-md py-2 px-6 bg-[#5c5470] hover:bg-[#302c3b] text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};
