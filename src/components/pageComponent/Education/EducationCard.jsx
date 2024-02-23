import { motion } from "framer-motion";
import React from "react";
import { getYear } from "../../../Util";

const EducationCard = ({ index, data }) => {
  let bgColor = index % 2 == 1 ? "bg-[#112D71]/10" : "bg-[#FD3259]/20";
  let border = index % 2 == 1 ? "border-[#0A4DF3]/20" : "border-[#FD3259]/20";

  /** Extracting Data Properly from Strapi API **/
  const { institute, start_date, end_date, description } = data.attributes;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      // transition={{ delay: index * 0.1, ease: "linear" }}
      className={`cursor-pointer py-4 px-4 ${bgColor} hover:shadow-lg  rounded-md backdrop-blur border ${border} transition-transform hover:scale-105`}
    >
      <h4 className="text-xs  text-[#AAAAAA]">
        {getYear(start_date)} - {getYear(end_date)}
      </h4>
      <h1 className="text-base font-bold mt-2">{institute}</h1>
      <p className="text-sm mt-2 font-light">{description}</p>
    </motion.div>
  );
};

export default EducationCard;
