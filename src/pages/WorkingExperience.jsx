import React from "react";

import ExperienceCard from "../components/pageComponent/workingExperience/ExperienceCard";

function WorkingExperience() {
  return (
    <div className="flex flex-col items-center h-full py-10">
      <h1 className="text-center text-white font-bold text-4xl  mt-10">
        Working <span className="text-[#FD3259]">Experience</span>
      </h1>

      <div className="mx-auto h-full px-2 process space-y-8 mt-10">
        <ExperienceCard index={1} />
        <ExperienceCard index={2} />
        <ExperienceCard index={3} />
        <ExperienceCard index={4} />
      </div>
    </div>
  );
}

export default WorkingExperience;
