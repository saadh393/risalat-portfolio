import React, { useEffect, useState } from "react";
import EducationCard from "../components/pageComponent/Education/EducationCard";
import { AUTH, DOMAIN } from "../Util";

function Education() {
  const [education, setEducation] = useState([]);
  useEffect(() => {
    fetch(DOMAIN + "/api/educations", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH,
      },
    })
      .then((response) => response.json())
      .then((data) => setEducation(data.data));
  }, []);
  return (
    <div className="flex flex-col items-center h-full py-10">
      <h1 className="text-center text-[#FFCC30] font-bold text-4xl mt-10">Education</h1>

      <div className="mx-auto my-3 h-full px-2 space-y-8 mt-10">
        {education && education.map((data, index) => <EducationCard index={index} data={data} key={index} />)}
      </div>
    </div>
  );
}

export default Education;
