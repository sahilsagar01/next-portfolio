"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const experiences = [
  {
    title: "Magicsell AI",
    role: "Full Stack Intern",
    work: ["Maintained and added new features to the websites."],
  },
  {
    title: "Circle Health",
    role: "Full Stack Intern",
    work: [
      "Created a web scraping function pool to scrape hospitals that provide insurance across India, categorized by insurance company.",
      "Saved data in the database and built a search function to fetch relevant results.",
      "Developed a dashboard using HTML, CSS, and JS to visualize company data.",
    ],
  },
  {
    title: "Magicsell",
    role: "Associate Full Stack Developer",
    work: [
      "Built a Shopify theme extension from scratch using Remix.",
      "Enabled merchants to add Shopify or custom AI-based recommendations and gifting options (e.g. cart progress bar, BOGO offers).",
      "Developed a company presentation website highlighting features, pricing, and blogs.",
    ],
  },
  {
    title: "Vyral24",
    role: "Full Stack Developer (In Progress)",
    work: [
      "Actively pursuing this opportunity with high interest in joining the Vyral24 team.",
    ],
    inProgress: true,
  },
];
 const itemVariants = {
   hidden: { y: 20, opacity: 0 },
   visible: {
     y: 0,
     opacity: 1,
     transition: {
       duration: 0.5,
       ease: "easeOut",
     },
   },
 };

 

const JobExperience = () => {
  return (
    <div className="py-16 px-5 bg-black text-white min-h-screen flex flex-col gap-10">
      <div className=" lg:pt-2 flex flex-col md:gap-[250px]">
        {" "}
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
        >
          My <span className="text-blue-500">Job Experience</span>
        </motion.h2>
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Desktop Horizontal Timeline */}
          <div className="hidden sm:block">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700" />
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`w-[300px] px-2 py-4 absolute transform -translate-x-1/2 ${
                  index % 2 === 0 ? "top-0" : "bottom-0"
                }`}
                style={{
                  left: `${(index + 0.5) * (100 / experiences.length)}%`,
                }}
              >
                <div
                  className={`flex items-center text-center max-w-xs mx-auto ${
                    index % 2 === 0 ? "flex-col" : "flex-col-reverse"
                  }`}
                >
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 z-10 ${
                      exp.inProgress ? "bg-gray-600" : "bg-blue-600"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Sparkles className="text-white w-5 h-5" />
                  </motion.div>
                  <h3 className="text-md font-semibold mb-1">{exp.title}</h3>
                  <p className="text-blue-400 text-xs mb-2">{exp.role}</p>
                  <ul className="text-xs list-disc list-inside space-y-1 text-gray-300">
                    {exp.work.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div
              className="absolute top-1/2 left-0 h-1 z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              style={{
                width: `${
                  (experiences.length - 1) * (100 / experiences.length)
                }%`,
              }}
            />
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="block sm:hidden">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-700 transform -translate-x-1/2" />
            <div className="flex flex-col items-center space-y-20">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative w-full flex flex-col items-center"
                >
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 z-20 ${
                      exp.inProgress ? "bg-gray-600" : "bg-blue-600"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Sparkles className="text-white w-5 h-5" />
                  </motion.div>
                  <div className="text-center px-4 z-20">
                    <h3 className="text-md font-semibold mb-1">{exp.title}</h3>
                    <p className="text-blue-400 text-xs mb-2">{exp.role}</p>
                    <ul className="text-xs list-disc list-inside space-y-1 text-gray-300">
                      {exp.work.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="absolute left-1/2 top-0 z-10 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2"
              style={{ height: `${experiences.length * 140}px` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobExperience;
