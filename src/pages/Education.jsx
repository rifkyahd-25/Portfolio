import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaShieldAlt,
  FaNodeJs,
} from "react-icons/fa";
import { TbBrandFramerMotion, TbBrandTailwind } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import edu from "../assets/8703118_3974104-removebg-preview.png";
import logo1 from "../assets/logos/5613852.png";
import logo2 from "../assets/logos/ECCouncilLogo.jpg";
import logo3 from "../assets/logos/freeCodeCamp.png";
import logo4 from "../assets/logos/Logo-OUSL-tnsp-207x300.png";
import logo5 from "../assets/logos/pngwing.com(2).png";
import logo6 from "../assets/logos/pngwing.com(3).png";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);
  return (
    <>
      <section className="text-white flex items-center justify-center min-h-screen">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:gap-16 px-6 md:px-24 lg:px-32">
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              className="max-w-[350px] md:max-w-[450px] lg:max-w-[500px] object-cover rounded-lg shadow-xl"
              src={edu}
              alt="Education"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl">
              Education
            </h1>
            <p className="mt-4 text-lg font-semibold text-gray-300 sm:text-xl">
              Basic Qualification and Certifications
            </p>
            <motion.div
              className="flex justify-center md:justify-start items-center gap-4 mt-6 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2 }}
            >
              {[logo1, logo2, logo3, logo4, logo5, logo6].map((logo, index) => (
                <motion.img
                  key={index}
                  className="w-14 h-14 object-contain bg-gray-200 p-2 rounded-full shadow-md"
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className=" pb-28 w-screen" ref={ref}>
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8 }}
        >
          <img className="h-40" src={logo4} alt="University Logo" />
        </motion.div>

        <motion.h1
          className="p-5 text-5xl text-[#dbd8e3] font-bold text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Degree
        </motion.h1>

        <div className="container mx-auto flex justify-center">
          <motion.div
            className="w-full md:w-3/4 lg:w-2/3 bg-[#5c5470] text-[#dbd8e3] rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            variants={{ visible: { opacity: 1, scale: 1 } }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* University Info */}
            <h2 className="text-3xl font-extrabold text-[#dbd8e3] mb-4">
              The Open University of Sri Lanka (OUSL)
            </h2>
            <h3 className="text-xl font-semibold text-[#dbd8e3] mb-6">
              Bachelor of Software Engineering (BSE)
              <span className="text-sm text-gray-400">| 2024 - Present</span>
            </h3>

            {/* Course Highlights */}
            <div className="space-y-4 ">
              {[
                "⚡ Currently studying core subjects like Software Engineering, Data Structures, Algorithms, DBMS, and AI.",
                "⚡ Gaining experience in Full Stack Development, Cloud Computing, and Mobile App Development.",
                "⚡ Working on projects like an event management app with the MERN stack to enhance practical skills.",
              ].map((item, index) => (
                <motion.p
                  key={index}
                  className="text-lg  text-[#dbd8e3]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={controls}
                  variants={{ visible: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="text-white px-6 w-screen pb-28">
        <div className="container mx-auto text-center">
          <h4 className="text-3xl font-bold text-white mb-8">Certifications</h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Backend Architectures",
                link: "https://static.frontendmasters.com/ud/c/7de45d7d4d/QwFhPgOrEp/backend-architectures.pdf",
                icons: [[<FaNodeJs key="nodejs" />, "NodeJs"]],
              },
              {
                title: "SVG Essentials & Animation",
                link: "https://static.frontendmasters.com/ud/c/7de45d7d4d/wNyiVTkPAi/svg-essentials-animation.pdf",
                icons: [
                  [<FaHtml5 key="html" />, "HTML"],
                  [<TbBrandFramerMotion key="motion" />, "Animations"],
                  [<FaJs key="js" />, "JavaScript"],
                ],
              },
              {
                title: "Tailwind CSS",
                link: "https://static.frontendmasters.com/ud/c/7de45d7d4d/hXdaKmozON/tailwind-css.pdf",
                icons: [
                  [<FaHtml5 key="html" />, "HTML"],
                  [<TbBrandTailwind key="tailwind" />, "Tailwind"],
                  [<FaJs key="js" />, "JavaScript"],
                ],
              },
              {
                title: "Foundations of Cybersecurity",
                link: "https://www.coursera.org/account/accomplishments/verify/BND6YT4MKC7N",
                icons: [[<MdOutlineSecurity key="security" />, "Security"]],
              },
              {
                title: "Responsive Web Design",
                link: "https://www.freecodecamp.org/certification/fcc6a5dd4dd-06cd-45a5-9492-e8e0113f69f7/responsive-web-design",
                icons: [
                  [<FaHtml5 key="html" />, "HTML"],
                  [<FaCss3Alt key="css" />, "CSS"],
                  [<FaJs key="js" />, "JavaScript"],
                ],
              },
              {
                title: "Ethical Hacking Essentials (EHE)",
                link: "https://codered.eccouncil.org/certificate/fe0fdb6b-062a-4637-8c12-40f1677ae089?logged=true",
                icons: [[<MdOutlineSecurity key="security" />, "Security"]],
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-[#5c5470] text-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
              >
                <div className="p-6 text-center">
                  <h5 className="text-lg font-semibold text-white mb-4">
                    {cert.title}
                  </h5>
                  <a
                    href={cert.link}
                    className="inline-block py-2 px-4 bg-[#dbd8e3] text-[#2a2438] rounded-md font-semibold hover:bg-[#939199] transition-all duration-300"
                    download
                  >
                    Download Certificate
                  </a>

                  <div className="mt-4 flex justify-center gap-4">
                    {cert.icons.map(([icon, label], i) => (
                      <span key={i} className="text-lg text-white flex items-center gap-2">
                        {icon} {label}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
