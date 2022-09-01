import React from "react";

import ExperienceCard from "../components/pageComponent/workingExperience/ExperienceCard";

function WorkingExperience() {
  return (
    <div className="flex flex-col items-center h-full py-8 ">
      <h1 className="text-center text-white font-bold text-4xl ">
        Working <span className="text-[#FD3259]">Experience</span>
      </h1>

      <div className="mx-auto my-3 mt-4 h-full  px-2 process">
        <ExperienceCard index={1} />
        <ExperienceCard index={2} />
        <ExperienceCard index={3} />
        <ExperienceCard index={4} />
      </div>
    </div>
  );
}

export default WorkingExperience;
