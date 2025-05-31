"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import Link from "next/link";
import { SiShopify } from "react-icons/si";

const Hero = () => {
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
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      className=" min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Hi, I&apos;m <span className="text-blue-500">Sahil Kumar</span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-300">
              Full Stack Developer
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-2xl"
          >
            I create beautiful and functional web applications with a focus on
            user experience and modern technologies.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4">
            <Link
              target="_blank"
              href="https://magicsell.ai/"
              className=" cursor-pointer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium  cursor-pointer"
              >
                View Current Project
              </motion.button>
            </Link>
            <Link href="/contact" className=" cursor-pointer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg font-medium  cursor-pointer"
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="relative w-full h-[300px] lg:h-[600px]"
          variants={itemVariants}
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate="animate"
            variants={floatingVariants}
          >
            <div className="relative w-full max-w-sm rounded-full overflow-hidden aspect-square">
              <Image
                src="/assets/images/codeboy.JPEG"
                alt="Developer Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-30 w-24 h-24"
            animate={{
              x: [0, -10, 0], // Move up 10px then back down
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <h2 className="flex items-center gap-2 text-3xl font-light text-black dark:text-white text-shadow-2xs text-shadow-black">
              Next.js
            </h2>
          </motion.div>
          <motion.div
            className="absolute top-20 right-20 w-24 h-24"
            animate={{
              x: [0, -10, 0], // Move up 10px then back down
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <h2 className="flex items-center gap-2 text-3xl font-medium text-black dark:text-white">
              Mongo <span className=" text-green-500">db</span>
            </h2>
          </motion.div>
          <motion.div
            className="absolute top-1/4 -left-2 w-24 h-24"
            animate={{
              x: [0, -10, 0], // Move up 10px then back down
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <h2 className="flex items-center gap-2 text-3xl font-bold text-[#95BF47]">
              <SiShopify className="text-4xl" />
              ShopifyCLI
            </h2>
          </motion.div>
          <motion.div
            className="absolute bottom-1/7 right-30 w-24 h-24"
            animate={{
              x: [0, -10, 0], // Move up 10px then back down
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <h2 className="flex items-center gap-2 text-3xl font-bold text-[#000] text-shadow-2xs text-shadow-blue-50">
              ExpressJs
            </h2>
          </motion.div>

          <motion.div
            className="absolute bottom-1/6 -right-4"
            animate={{
              x: [0, -10, 0], // Move up 10px then back down
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 drop-shadow-[0_0_10px_rgba(99,102,241,0.8)] tracking-wide uppercase">
              Remix.js
            </h2>
          </motion.div>
        </motion.div>
      </div>
      <SocialLinks />
    </motion.section>
  );
};

export default Hero;
