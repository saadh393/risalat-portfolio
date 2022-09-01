import React from "react";

const EducationCard = ({ index }) => {
  let bgColor = index % 2 == 1 ? "bg-[#112D71]/10" : "bg-[#FD3259]/20";
  let border = index % 2 == 1 ? "border-[#0A4DF3]/20" : "border-[#FD3259]/20";
  return (
    <div
      className={`cursor-pointer py-4 px-4 mt-4 ${bgColor} hover:shadow-lg  rounded-md backdrop-blur border ${border} transition-transform hover:scale-105`}
    >
      <h4 className="text-xs  text-[#AAAAAA]">2014 - 2017</h4>
      <h1 className="text-base font-bold mt-2">Institute of Business Administration (IBA), University of Dhaka</h1>
      <p className="text-sm mt-2 font-light">
        Doctorate of Business Administration (DBA), Digital Marketing Tools for Bottom of The Pyramid Consumers of
        BangladeshDoctorate of Business Administration (DBA), Digital Marketing Tools for Bottom of The Pyramid
        Consumers of Bangladesh
      </p>
    </div>
  );
};

export default EducationCard;
