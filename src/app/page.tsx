import { motion } from "framer-motion";
import { socialLinks } from "./socialLinks";
import { experience, totalExperience, tools, tech } from "./data";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex flex-col items-center justify-center">
      {/* Social Links - Center Right */}
      <div className="fixed top-1/2 right-6 -translate-y-1/2 flex flex-col gap-6 z-20">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-white hover:text-blue-400 transition text-2xl shadow-lg"
            >
              <Icon />
            </a>
          );
        })}
      </div>

      {/* Center Animation */}
      <motion.div
        className="flex flex-col items-center justify-center gap-6 bg-white/10 rounded-xl p-10 shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-white mb-2 text-center"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Hi, I&apos;m Your Name
        </motion.h1>
        <motion.p
          className="text-lg text-gray-200 text-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Full Stack Developer & Shopify App Specialist
        </motion.p>
        <motion.div
          className="text-base text-gray-300 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div className="mb-2 font-semibold text-white">
            Total Experience: {totalExperience}
          </div>
          <ul className="mb-2">
            {experience.map((exp) => (
              <li key={exp.company}>
                <span className="font-bold text-white">{exp.company}</span> -{" "}
                {exp.role}{" "}
                <span className="text-gray-400">({exp.duration})</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row gap-6 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <div>
            <div className="font-semibold text-white mb-1">Tools</div>
            <ul className="flex flex-wrap gap-2 text-gray-200">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="bg-gray-700 rounded px-2 py-1 text-xs"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white mb-1">Tech</div>
            <ul className="flex flex-wrap gap-2 text-gray-200">
              {tech.map((t) => (
                <li key={t} className="bg-gray-700 rounded px-2 py-1 text-xs">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
