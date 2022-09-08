import React, { useEffect, useState } from "react";
import AchievementCard from "../components/pageComponent/Achivement/AchievementCard";
import { AUTH, DOMAIN } from "../Util";

function Achievement() {
  const [achivements, setAchivements] = useState([]);
  useEffect(() => {
    fetch(DOMAIN + "/api/achivements", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAchivements(data.data);
      });
  }, []);

  return (
    <div className="flex flex-col items-center h-full py-10 ">
      <h1 className="text-center text-white font-bold text-4xl mt-10">Achievement</h1>

      <div className="mx-auto my-3 mt-10 justify-center lg:justify-between gap-x-5 lg:gap-0 px-2 flex flex-wrap">
        {achivements &&
          achivements.map((achivement) => (
            <AchievementCard index={achivement.id} key={achivement.id} data={achivement.attributes} />
          ))}
      </div>
    </div>
  );
}

export default Achievement;
