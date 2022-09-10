import React, { useContext } from "react";

import ExperienceCard from "../components/pageComponent/workingExperience/ExperienceCard";
import { ApplicationContext } from "../Routes";

function WorkingExperience() {
  const { experiences } = useContext(ApplicationContext);

  return (
    <div className="flex flex-col items-center h-full py-10">
      <h1 className="text-center text-white font-bold text-4xl  mt-10">
        Working <span className="text-[#FD3259]">Experience</span>
      </h1>

      <div className="mx-auto h-full px-2 process space-y-8 mt-10">
        {experiences && experiences.map((ex) => <ExperienceCard index={ex.id} data={ex.attributes} key={ex.id} />)}
      </div>
    </div>
  );
}

export default WorkingExperience;
