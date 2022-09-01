import React from "react";
import Image from "../../../../public/images/experience/basis.jpg";

const ExperienceCard = ({ index }) => {
  let bgColor = index % 2 == 1 ? "bg-[#112D71]/10" : "bg-[#FD3259]/20";
  let border = index % 2 == 1 ? "border-[#0A4DF3]/20" : "border-[#FD3259]/20";
  return (
    <div className="flex gap-5 items-center mt-8 relative">
      <div className="w-[100px] h-[100px] overflow-hidden rounded-md">
        <img className="w-full h-full object-cover" src={Image} />
      </div>

      <div className="timeline">
        <div className="w-4 h-4 rounded-full bg-[#487BBC] ring-2 ring-white ring-offset-[#242D41] ring-offset-2"></div>
      </div>

      <div
        className={`ml-2 transition-transform hover:scale-105 flex-1 cursor-pointer py-4 px-4 ${bgColor} hover:shadow-lg  rounded-md backdrop-blur border ${border}`}
      >
        <h1 className="text-base font-bold">The Man of Steel</h1>
        <h4 className="text-xs  text-[#AAAAAA] mt-2">Sep 2014 - Present · 7 yrs 7 mos</h4>
        <p className="text-sm mt-2 font-light">
          As a partner of the firm, my responsibilities include overall contribution to business management and
          specifically towards strategic planning and Brand integration in consumer engagement approach development for
          client's Brands.
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
