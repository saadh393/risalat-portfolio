import { motion } from "framer-motion";
import { default as React, useContext } from "react";
import EducationCard from "../components/pageComponent/Education/EducationCard";
import { ApplicationContext } from "../Routes";

function Education() {
  const { educations } = useContext(ApplicationContext);

  return (
    <motion.div
      className="flex flex-col items-center h-full py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-center text-[#FFCC30] font-bold text-4xl mt-10">Education</h1>

      <div className="mx-auto my-3 h-full px-2 space-y-8 mt-10">
        {educations && educations.map((data, index) => <EducationCard index={index} data={data} key={index} />)}
      </div>
    </motion.div>
  );
}

export default Education;
