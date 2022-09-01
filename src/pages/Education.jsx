import React from "react";
import EducationCard from "../components/pageComponent/Education/EducationCard";

function Education() {
  return (
    <div className="flex flex-col items-center h-full py-8 ">
      <h1 className="text-center text-[#FFCC30] font-bold text-4xl ">Education</h1>

      <div className="mx-auto my-3 mt-4 h-full  px-2">
        <EducationCard index={1} />
        <EducationCard index={2} />
        <EducationCard index={3} />
        <EducationCard index={4} />
      </div>
    </div>
  );
}

export default Education;
