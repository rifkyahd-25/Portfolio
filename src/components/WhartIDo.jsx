import React from 'react'
import { motion } from "framer-motion";

import fullstack from "../assets/4102879_971.jpg";
import cybersecurity from "../assets/12876462_9Z_2102.w020.n001.1044B.p15.1044.jpg";
import performance from "../assets/12029525_116Z_2012.w013.n001.345B.p30.345.jpg";
import tools from "../assets/21742831_6495319.jpg";

const fadeInLeft = (delay = 0) => ({
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay } },
  });
  
  const fadeInRight = (delay = 0) => ({
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay } },
  });
export const WhartIDo = () => {
  return (
    <section className="text-white py-16 flex flex-col items-center justify-center">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInLeft()}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        🚀 What I Do
      </motion.h1>

      <div className="space-y-16 max-w-5xl w-full">
        {/* Full-Stack Web Development (Image Right, Text Left) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center text-center md:text-left gap-8"
        >
          <motion.div
            variants={fadeInLeft(0)}
            className="w-full md:w-1/2 space-y-4"
          >
            <h3 className="text-4xl font-semibold">
              💻 Full-Stack Web Development
            </h3>
            <div className="text-xl space-y-4">
              <p>
                ✔ Frontend: React.js, Tailwind CSS, GSAP animations for dynamic
                UI/UX.
              </p>
              <p>
                ✔ Backend: Node.js, Express.js, REST APIs for seamless
                communication.
              </p>
              <p>
                ✔ Database: MongoDB, SQL for structured and scalable data
                storage.
              </p>
              <p>
                ✔ Authentication: Firebase, JWT, role-based access controls.
              </p>
            </div>
          </motion.div>
          <motion.img
            variants={fadeInRight(0.3)}
            src={fullstack}
            alt="Full-Stack Web Development"
            className="w-80 h-60 object-cover rounded-lg shadow-lg md:w-3/5 lg:w-1/2"
          />
        </motion.div>

        {/* Cybersecurity (Image Left, Text Right) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse items-center text-center md:text-left gap-8"
        >
          <motion.div
            variants={fadeInRight(0)}
            className="w-full md:w-1/2 space-y-4"
          >
            <h3 className="text-4xl font-semibold">
              🛡️ Cybersecurity & Secure Coding
            </h3>
            <div className="text-xl space-y-4">
              <p>✔ Security-first development to prevent vulnerabilities.</p>
              <p>
                ✔ Authentication & Authorization using OAuth, JWT, Firebase.
              </p>
              <p>
                ✔ Data Protection & Encryption to safeguard sensitive
                information.
              </p>
            </div>
          </motion.div>
          <motion.img
            variants={fadeInLeft(0.3)}
            src={cybersecurity}
            alt="Cybersecurity & Secure Coding"
            className="w-80 h-60 md:w-3/5 lg:w-1/2 px-4 object-cover rounded-lg flext justify-center items-center shadow-lg"
          />
        </motion.div>

        {/* Performance Optimization (Image Right, Text Left) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center text-center md:text-left gap-8"
        >
          <motion.div
            variants={fadeInLeft(0)}
            className="w-full md:w-1/2 space-y-4"
          >
            <h3 className="text-4xl font-semibold">
              ⚡ Performance Optimization
            </h3>
            <div className="text-xl space-y-4">
              <p>✔ Efficient APIs with caching and optimized queries.</p>
              <p>✔ SEO & Accessibility for better web reach.</p>
              <p>✔ Scalable architectures for high-performance apps.</p>
            </div>
          </motion.div>
          <motion.img
            variants={fadeInRight(0.3)}
            src={performance}
            alt="Performance Optimization"
            className="md:w-3/5 lg:w-1/2 w-80 h-60 object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Tools & Technologies (Image Left, Text Right) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse items-center text-center md:text-left gap-8"
        >
          <motion.div
            variants={fadeInRight(0)}
            className="w-full md:w-1/2 space-y-4"
          >
            <h3 className="text-4xl font-semibold">🛠️ Tools & Technologies</h3>
            <div className="text-xl space-y-4">
              <p>✔ React.js, Next.js, Tailwind CSS</p>
              <p>✔ Node.js, Express.js, MongoDB</p>
              <p>✔ Git, GitHub, CI/CD Deployment</p>
              <p>✔ Firebase Authentication & Firestore</p>
              <p>✔ REST APIs, Postman, WebSockets</p>
            </div>
          </motion.div>
          <motion.img
            variants={fadeInLeft(0.3)}
            src={tools}
            alt="Tools & Technologies"
            className="md:w-3/5 lg:w-1/2 w-80 h-60 object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}
