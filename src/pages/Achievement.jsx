import React from "react";
import AchievementCard from "../components/pageComponent/Achivement/AchievementCard";

function Achievement() {
  return (
    <div className="flex flex-col items-center h-full py-10 ">
      <h1 className="text-center text-white font-bold text-4xl mt-10">Achievement</h1>

      <div className="mx-auto my-3 mt-10 justify-center lg:justify-between gap-x-5 lg:gap-0 px-2 flex flex-wrap">
        <AchievementCard index={1} />
        <AchievementCard index={2} />
        <AchievementCard index={3} />
        <AchievementCard index={4} />
        <AchievementCard index={5} />
        <AchievementCard index={6} />
        <AchievementCard index={7} />
        <AchievementCard index={8} />
        <AchievementCard index={9} />
        <AchievementCard index={10} />
      </div>
    </div>
  );
}

export default Achievement;
