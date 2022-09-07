import React from "react";
import Award from "../../../components/Award";

const AchievementCard = ({ index }) => {
  let bgColor = index % 2 == 1 ? "bg-[#112D71]/10" : "bg-[#FD3259]/20";
  let border = index % 2 == 1 ? "border-[#0A4DF3]/20" : "border-[#FD3259]/20";
  return (
    <div
      className={`cursor-pointer flex flex-col items-center max-w-xs h-fit py-8 px-4 mt-4 ${bgColor} hover:shadow-lg rounded-md backdrop-blur border ${border} transition-transform hover:scale-105`}
    >
      <div className="w-[50px]">
        <Award />
      </div>
      <p className="text-sm text-[#B2B2B2] mt-6">Gold</p>
      <h1 className="text-base mt-2 font-bold text-center">Best use of PR in digital platform</h1>
      <p className="text-sm mt-2 font-light text-center">
        Digital Marketing Award-2017 Fair & Lovely bb cream launch(DBA)
      </p>
    </div>
  );
};

export default AchievementCard;
