"use client"

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    title: "Magicsell AI",
    role: "Full Stack Intern",
    work: [
      "Maintained and added new features to the websites."
    ]
  },
  {
    title: "Circle Health",
    role: "Full Stack Intern",
    work: [
      "Created a web scraping function pool to scrape hospitals that provide insurance across India, categorized by insurance company.",
      "Saved data in the database and built a search function to fetch relevant results.",
      "Developed a dashboard using HTML, CSS, and JS to visualize company data."
    ]
  },
  {
    title: "Magicsell App",
    role: "Associate Full Stack Developer",
    work: [
      "Built a Shopify theme extension from scratch using Remix.",
      "Enabled merchants to add Shopify or custom AI-based recommendations and gifting options (e.g. cart progress bar, BOGO offers).",
            "Developed a company presentation website highlighting features, pricing, and blogs."

    ]
  },
  {
    title: "Vyral24",
    role: "Full Stack Developer (In Progress)",
    work: [
      "Actively pursuing this opportunity with high interest in joining the Vyral24 team."
    ],
    inProgress: true
  }
];

const JobExperience = () => {
  return (
    <div className="py-10 px-5 bg-black text-white h-screen flex flex-col gap-[20px]">
      <Link href="/">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2  backdrop-blur-sm px-4 py-2 rounded-lg text-white transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Back</span>
        </motion.button>
      </Link>
      <div className=" flex flex-col gap-[300px]">
        <h2 className="text-3xl font-bold text-center mb-10">
          My Job Experience
        </h2>
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1  bg-gray-700 " />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`w-[400px] px-2 py-4 absolute transform -translate-x-1/2 ${
                index % 2 === 0 ? "top-0" : "bottom-0"
              }`}
              style={{ left: `${(index + 0.5) * (100 / experiences.length)}%` }}
            >
              <div
                className={`flex  items-center text-center max-w-xs mx-auto ${
                  index % 2 === 0 ? "flex-col" : "flex-col-reverse"
                }`}
              >
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 z-10 ${
                    exp.inProgress ? "bg-gray-600" : "bg-blue-600"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sparkles className="text-white w-6 h-6" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                <p className="text-blue-400 text-sm mb-2">{exp.role}</p>
                <ul className="text-sm list-disc list-inside space-y-1 text-gray-300">
                  {exp.work.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Incomplete progress bar overlay */}
          <div
            className="absolute top-1/2 left-0 h-1 z-10 bg-gradient-to-r  from-blue-500 via-purple-500 to-pink-500"
            style={{
              width: `${
                (experiences.length - 1) * (100 / experiences.length)
              }%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default JobExperience;
