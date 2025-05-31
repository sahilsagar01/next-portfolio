'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

interface Project {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  gitUrl: string;
  liveUrl: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

 const projects: Project[] = [
   {
     title: "HACKER NEWS",
     period: "2023 - 2024",
     description:
       "A clone of the original Hacker News by Y-combinator built on react. Mui and Bootstrap are used to make the UI/UX clean and visually appealing. This app uses the original live API provided by the hacker news community to render the live information on UI.",
     technologies: ["React", "Material-UI", "Bootstrap", "Hacker News API"],
     gitUrl: "https://github.com/sahilsagar01/react-hacker-news-clone",
     liveUrl: "https://hacker-news-by8f.onrender.com",
   },
   {
     title: "DAILY NEWS",
     period: "2023 - 2024",
     description:
       "Daily news is built on MERN stack technology with authentication. Users have to sign in or sign up first to enter the application. This application has several categories like business, sports, politics, health, and technology that help the user to see only those news in which the user is interested.",
     technologies: [
       "MongoDB",
       "Express.js",
       "React",
       "Node.js",
       "Tailwind CSS",
       "Bootstrap",
     ],
     gitUrl: "https://github.com/sahilsagar01/dailyhunt",
     liveUrl: "https://news-app-client.onrender.com",
   },
   {
     title: "Task Master (MERN)",
     period: "May 2022 - Present",
     description:
       "A basic MERN Task management app that allows users to do CRUD operations on tasks. Inside this app, we can create new tasks with title and content. Every task has a status button to change status from pending to complete.",
     technologies: ["MongoDB", "Express.js", "React", "Node.js"],
     gitUrl: "https://github.com/sahilsagar01/task-master-mern", // Add GitHub repo if available
     liveUrl: "https://mern-task-master-client.onrender.com",
   },
   {
     title: "Weather App (React App)",
     period: "May 2022 - Present",
     description:
       "A simple weather forecast application, this app provides you temperature, weather, wind speed, and humidity. You can also see the weather inside the weather card and save and delete the card if you want.",
     technologies: ["React", "OpenWeatherMap API"],
     gitUrl: "https://github.com/sahilsagar01/react-weather-app", // Add GitHub repo if available
     liveUrl: "https://react-weather-client.onrender.com",
   },
 ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="projects"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-8 left-8"
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 backdrop-blur-sm px-4 py-2 rounded-lg text-white transition-colors"
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
      </motion.div>

      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
        >
          My <span className="text-blue-500">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden ${selectedProject === index ? 'md:col-span-2' : ''}`}
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-semibold text-blue-500">{project.title}</h3>
                  <span className="text-sm text-gray-400">{project.period}</span>
                </div>

                <p className="text-gray-300">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/10 rounded-full text-sm text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <AnimatePresence>
                  {hoveredProject === index && (
                    <motion.div
                      variants={overlayVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4"
                    >
                      <div className="flex justify-between items-center">
                        <a
                          href={project.gitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 flex items-center space-x-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          <span>View on GitHub</span>
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Demo →
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;