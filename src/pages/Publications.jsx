import React from "react";
import PublicationCard from "../components/pageComponent/Publications/PublicationCard";

function Publications() {
  return (
    <div className="flex flex-col items-center h-full py-10 ">
      <h1 className="text-center text-[#FFCC30] font-bold text-4xl mt-10">Publications</h1>

      <div className="mx-auto mt-10 justify-center lg:justify-between gap-x-5 gap-5 px-2 flex flex-wrap gap-y-10">
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
      </div>
    </div>
  );
}

export default Publications;
