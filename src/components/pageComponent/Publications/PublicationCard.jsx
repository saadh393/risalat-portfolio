import React from "react";
import { DOMAIN } from "../../../Util";

const PublicationCard = ({ data }) => {
  const { title, publisher, link, thumbnail, published_date } = data;
  const { url } = thumbnail.data.attributes;
  return (
    <a
      href={link}
      target="_blank"
      className={` cursor-pointer flex flex-col items-center max-w-xs h-fit hover:shadow-lg rounded-md overflow-hidden transition-transform hover:scale-105`}
    >
      <img src={DOMAIN + url} className="w-full h-[250px] object-cover rounded-md" />

      <div className="bg-black/10 backdrop-blur px-2 py-6">
        <h1 className="text-base mt-2 font-bold ">{title}</h1>
        <div className="flex text-xs gap-2 mt-2 text-[#D2D2D2]">
          <p>{publisher}</p>
        </div>
      </div>
    </a>
  );
};

export default PublicationCard;
