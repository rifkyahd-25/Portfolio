import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaTwitter } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className=" py-8 text-center">
        <div className="flex justify-center">

        <hr class="mt-[30px] text-white w-[90%]" />
        </div>
      <div className="max-w-3xl mx-auto  shadow-lg rounded-xl p-6">
        <span className="inline-flex items-center bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 rounded-full">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Available for work
        </span>
        <h2 className="text-white text-2xl font-semibold mt-4">Let's build something amazing together! 🚀</h2>
        <button className="mt-4 bg-black text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-gray-900">
          Contact Me
        </button>
      </div>

      <div className="mt-6 flex justify-center space-x-4 text-gray-600">
        <FaLinkedin className="w-6 h-6 hover:text-black cursor-pointer" />
        <FaGithub className="w-6 h-6 hover:text-black cursor-pointer" />
        <FaInstagram className="w-6 h-6 hover:text-black cursor-pointer" />
        <FaEnvelope className="w-6 h-6 hover:text-black cursor-pointer" />
        <FaTwitter className="w-6 h-6 hover:text-black cursor-pointer" />
      </div>

      <p className="mt-4 text-sm text-gray-500">© 2025 Rifky. All rights reserved.</p>
    </footer>
  )
}
