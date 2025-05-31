'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "ReactJS", level: 90 },
        { name: "NextJs", level: 85 },
        { name: "Remix", level: 80 },
        { name: "JavaScript", level: 95 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "NodeJS", level: 85 },
        { name: "ExpressJS", level: 80 },
        { name: "ShopifyCLI", level: 75 },
        { name: "Rest API", level: 90 },
      ],
    },
    {
      name: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "postgreSQL", level: 70 },
      ],
    },
  ];

  const tools = [
    'Git',
    'AWS (EC2/S3)',
    'Jira',
    // 'Azure',
    'Auth0',
    'Postman'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const chipVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const CircularProgress = ({ percentage }: { percentage: number }) => {
    const circumference = 2 * Math.PI * 30; // r = 30
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative w-20 h-20">
        <svg className="transform -rotate-90 w-20 h-20">
          <circle
            className="text-gray-700"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="30"
            cx="40"
            cy="40"
          />
          <motion.circle
            className="text-blue-500"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            stroke="currentColor"
            fill="transparent"
            r="30"
            cx="40"
            cy="40"
            animate={{ strokeDashoffset }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-semibold text-white">{percentage}%</span>
        </div>
      </div>
    );
  };

  const RunningLine = () => (
    <motion.div
      className="absolute left-0 w-full h-0.5 bg-blue-500/20"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      <motion.div
        className="absolute left-0 w-full h-full bg-blue-500"
        animate={{
          x: ['0%', '100%'],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      />
    </motion.div>
  );

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white py-18 px-4 sm:px-6 lg:px-8 relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="skills"
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
      </motion.div>
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
        >
          Technical <span className="text-blue-500">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name + categoryIndex}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 relative overflow-hidden"
            >
              <RunningLine />
              <h3 className="text-2xl font-semibold mb-6 text-blue-500">
                {category.name}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name + skillIndex}
                    variants={itemVariants}
                    className="flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <h4 className="text-lg font-medium mb-2">{skill.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="h-1 w-8 rounded-full bg-blue-500/20"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              delay: i * 0.1,
                              duration: 0.5,
                              ease: "easeOut",
                            }}
                          >
                            <motion.div
                              className="h-full rounded-full bg-blue-500"
                              initial={{ scaleX: 0 }}
                              animate={{
                                scaleX: i < (skill.level / 100) * 5 ? 1 : 0,
                              }}
                              transition={{
                                delay: 0.5 + i * 0.1,
                                duration: 0.5,
                              }}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <CircularProgress percentage={skill.level} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden"
        >
          <RunningLine />
          <h3 className="text-2xl font-semibold mb-6 text-blue-500">Tools</h3>
          <div className="flex flex-wrap gap-4">
            {tools.map((tool) => (
              <motion.div
                key={tool}
                variants={chipVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full text-white border border-blue-500/20 hover:border-blue-500/50 transition-colors"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;