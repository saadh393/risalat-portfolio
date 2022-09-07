import React from "react";
import PublicationImage from "../../../../public/images/publications/publication.jpg";

const PublicationCard = () => {
  return (
    <div
      className={` cursor-pointer flex flex-col items-center max-w-xs h-fit hover:shadow-lg rounded-md overflow-hidden transition-transform hover:scale-105`}
    >
      <img src={PublicationImage} className="w-full h-[250px] object-cover rounded-md" />

      <div className="bg-black/10 backdrop-blur px-2 py-6">
        <h1 className="text-base mt-2 font-bold ">
          Protecting Small & Medium Producers of Bangladeshi Boutique Fashion
        </h1>
        <div className="flex text-xs gap-2 mt-2 text-[#D2D2D2]">
          <p>August 8, 2016</p>
          <p> ○ </p>
          <p>ICE Business Times</p>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
