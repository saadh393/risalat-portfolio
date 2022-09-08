import React from "react";
import { DOMAIN, getMonth, getYear } from "../../../Util";

const ExperienceCard = ({ index, data }) => {
  let bgColor = index % 2 == 1 ? "bg-[#112D71]/10" : "bg-[#FD3259]/20";
  let border = index % 2 == 1 ? "border-[#0A4DF3]/20" : "border-[#FD3259]/20";

  const { designation, start_date, end_date, description, company_name, company_website, company_logo } = data;
  const { url } = company_logo.data.attributes;

  return (
    <div className="flex gap-3 md:gap-5 items-center relative">
      <a
        href={company_website}
        title={company_name}
        target="_blank"
        className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] overflow-hidden rounded-md"
      >
        <img className="w-full h-full object-cover" src={DOMAIN + url} />
      </a>

      <div className="timeline">
        <div className="w-4 h-4 rounded-full bg-[#487BBC] ring-2 ring-white ring-offset-[#242D41] ring-offset-2"></div>
      </div>

      <div
        className={`ml-2 transition-transform hover:scale-105 flex-1 cursor-pointer py-4 px-4 ${bgColor} hover:shadow-lg  rounded-md backdrop-blur border ${border}`}
      >
        <div className="flex gap-x-3">
          <h1 className="text-base font-bold">{designation}</h1>
        </div>
        <h4 className="text-xs  text-[#AAAAAA] mt-2">
          {start_date ? getMonth(start_date) && getYear(start_date) + " - " : ""}
          {end_date ? getMonth(end_date) && getYear(end_date) : "Present"}
        </h4>
        <p className="text-sm mt-2 font-light leading-6">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
