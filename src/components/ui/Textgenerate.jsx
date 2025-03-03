"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const TextGenerate = ({ words, className, filter = true, duration = 0.5 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  let wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className={`font-bold ${className}`}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-xl sm:text-4xl leading-snug tracking-wide">
          <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className="dark:text-white text-black opacity-0"
                style={{ filter: filter ? "blur(10px)" : "none" }}
                variants={wordVariants}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.5 } },
};
