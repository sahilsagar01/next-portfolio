import { motion } from "framer-motion";
import { FaBuilding, FaHospitalAlt, FaShopify, FaRocket } from "react-icons/fa";

interface TimelineItem {
  company: string;
  role: string;
  duration: string;
  responsibility: string;
}

interface ProgressBarProps {
  timeline: TimelineItem[];
  progress: number;
  activeIndex: number;
}

export default function ProgressBar({
  timeline,
  progress,
  activeIndex,
}: ProgressBarProps) {
  const milestones = [20, 45, 75, 100];
  return (
    <div className=" relative w-full md:w-2/3 flex flex-col items-center justify-center relative min-h-[300px]">
      {/* Progress Bar */}
      <div className="relative w-[80%] h-2 bg-red-200 rounded-full overflow-hidden flex items-center mt-16 mb-16">
        <motion.div
          className="absolute top-0 left-0 h-2 bg-red-600 rounded-full"
          style={{ width: `${progress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
        {/* Milestones */}
        {timeline.map((item, i) => {
          const isActive = progress >= milestones[i];
          // Choose an industry icon for each milestone
          const icons = [FaBuilding, FaHospitalAlt, FaShopify, FaRocket];
          const Icon = icons[i];
          return (
            <motion.div
              key={item.company}
              className="absolute z-10000"
              style={{ left: `calc(${milestones[i]}% - 12px)`, top: "-10px" }}
              initial={{ scale: 0 }}
              animate={{ scale: isActive ? 1 : 0 }}
              transition={{ delay: isActive ? 0.2 : 0, duration: 0.5 }}
            >
              <span className="w-8 h-8 flex items-center justify-center text-red-600 bg-white rounded-full shadow-lg border-4 border-red-600">
                {Icon && <Icon className="w-6 h-6" />}
              </span>
            </motion.div>
          );
        })}
      </div>
      {/* Experience Popups */}
      {timeline.map((item, i) => {
        const isActive = progress >= milestones[i];
        const isCurrent = activeIndex === i;
        return (
          <motion.div
            key={item.company + "-popup"}
            className={`absolute w-[400px] bg-transparent ${
              isActive ? "block" : "hidden"
            }`}
            style={{
              left: `calc(${milestones[i]}% - 96px)`,
              top: i % 2 === 0 ? "0" : "120px",
            }}
            initial={{ opacity: 0, y: i % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: isCurrent ? 1 : 0.7, y: 0 }}
            transition={{ duration: 0.6, delay: isCurrent ? 0.2 : 0 }}
          >
            <div className="font-bold text-red-700 text-lg">{item.company}</div>
            <div className="text-red-800 font-semibold">{item.role}</div>
            <div className="text-xs text-red-500 mb-2">{item.duration}</div>
            <div className="text-sm text-gray-700">{item.responsibility}</div>
          </motion.div>
        );
      })}
    </div>
  );
}
