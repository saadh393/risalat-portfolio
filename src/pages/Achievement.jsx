import React, { useContext } from "react";
import AchievementCard from "../components/pageComponent/Achivement/AchievementCard";
import { ApplicationContext } from "../Routes";

function Achievement() {
  const { achievements } = useContext(ApplicationContext);

  return (
    <div className="flex flex-col items-center h-full py-10 ">
      <h1 className="text-center text-white font-bold text-4xl mt-10">Achievement</h1>

      <div className="mx-auto my-3 mt-10 justify-center lg:justify-between gap-x-5 lg:gap-0 px-2 flex flex-wrap">
        {achievements &&
          achievements.map((achivement) => (
            <AchievementCard index={achivement.id} key={achivement.id} data={achivement.attributes} />
          ))}
      </div>
    </div>
  );
}

export default Achievement;
