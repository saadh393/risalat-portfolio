import { motion } from "framer-motion";
import React from "react";
import Award from "../../../components/Award";

const AchievementCard = ({ index, data }) => {
  let bgColor = index % 2 == 1 ? "bg-[#112D71]/10" : "bg-[#FD3259]/20";
  let border = index % 2 == 1 ? "border-[#0A4DF3]/20" : "border-[#FD3259]/20";

  const { title, description, award_type } = data;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.2, ease: "linear" }}
      className={`cursor-pointer flex flex-col items-center max-w-xs h-fit py-8 px-4 mt-4 ${bgColor} hover:shadow-lg rounded-md backdrop-blur border ${border} transition-transform hover:scale-105`}
    >
      <div className="w-[50px]">
        <Award />
      </div>
      <p className="text-sm text-[#B2B2B2] mt-6">{award_type}</p>
      <h1 className="text-base mt-2 font-bold text-center">{title}</h1>
      <p className="text-sm mt-2 font-light text-center">{description}</p>
    </motion.div>
  );
};

export default AchievementCard;
