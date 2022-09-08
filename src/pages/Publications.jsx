import React, { useEffect, useState } from "react";
import PublicationCard from "../components/pageComponent/Publications/PublicationCard";
import { AUTH, DOMAIN } from "../Util";

function Publications() {
  const [publications, setPublications] = useState([]);
  useEffect(() => {
    fetch(DOMAIN + "/api/publications?populate=thumbnail", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPublications(data.data);
      });
  }, []);

  return (
    <div className="flex flex-col items-center h-full py-10 ">
      <h1 className="text-center text-white font-bold text-4xl mt-10">Publications</h1>

      <div className="mx-auto mt-10 justify-center lg:justify-between gap-x-5 gap-5 px-2 flex flex-wrap gap-y-10">
        {publications &&
          publications.map((publication) => <PublicationCard key={publication.id} data={publication.attributes} />)}
      </div>
    </div>
  );
}

export default Publications;
