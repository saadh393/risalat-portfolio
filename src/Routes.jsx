import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { getAchievements, getEducations, getExperiences, getPublications } from "./dataFetch/data";
import About from "./pages/About";
import Achievement from "./pages/Achievement";
import Education from "./pages/Education";
import GetInTouch from "./pages/GetInTouch";
import Home from "./pages/Home";
import Publications from "./pages/Publications";
import WorkingExperience from "./pages/WorkingExperience";

export const ApplicationContext = React.createContext();

const ApplicationRoutes = () => {
  const location = useLocation();
  const initalState = localStorage.getItem("state")
    ? localStorage.getItem("state")
    : { achievements: [], educations: [], experiences: [], publications: [] };
  const [state, setState] = useState(initalState);

  useEffect(() => {
    let finalObj = {};
    Promise.all([getEducations(), getExperiences(), getAchievements(), getPublications()]).then((values) => {
      values.map((value) => {
        value.achievements && (finalObj.achievements = value.achievements);
        value.educations && (finalObj.educations = value.educations);
        value.experiences && (finalObj.experiences = value.experiences);
        value.publications && (finalObj.publications = value.publications);
      });
      setState(finalObj);
      localStorage.setItem("state", JSON.stringify(finalObj));
    });
  }, []);

  return (
    <ApplicationContext.Provider value={state}>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Education" element={<Education />} />
        <Route path="Experience" element={<WorkingExperience />} />
        <Route path="Achievement" element={<Achievement />} />
        <Route path="Publication" element={<Publications />} />
        <Route path="GetInTouch" element={<GetInTouch />} />
      </Routes>
    </ApplicationContext.Provider>
  );
};

export default ApplicationRoutes;
