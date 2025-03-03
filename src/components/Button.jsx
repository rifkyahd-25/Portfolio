import React from 'react'
import { Github } from "lucide-react";
export const Button = () => {
  return (
    <>
    {/* Button Section */}
    <div className="relative z-40 inline-flex  mt-16">
          {/* Gradient Background */}
          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt "></div>

          {/* Button with GitHub Icon and Text */}
          <a
            href="https://github.com/rifkyahd-25"
            title="Star Me on Github"
            className="relative  inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
            aria-label="Star me on Github"
          >
            <Github className="mr-2" /> ⭐ Star Me On Github
          </a>
        </div>
    </>
  )
}
