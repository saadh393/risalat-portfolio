import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAchievements, getEducations, getExperiences, getPublications, getVideosAndAppearances } from "./dataFetch/data";
import About from "./pages/About";
import Education from "./pages/Education";
import GetInTouch from "./pages/GetInTouch";
import Home from "./pages/Home";
import Publications from "./pages/Publications";
import Videos from "./pages/Videos";
import WorkingExperience from "./pages/WorkingExperience";

export const ApplicationContext = React.createContext();

const ApplicationRoutes = () => {
  const location = useLocation();
  const initalState = localStorage.getItem("state") ? JSON.parse(localStorage.getItem("state")) : { achievements: [], educations: [], experiences: [], publications: [], getVideosAndAppearances: [] };
  console.log(initalState.educations);
  const [state, setState] = useState(initalState);

  useEffect(() => {
    let finalObj = {};
    Promise.all([getEducations(), getExperiences(), getAchievements(), getPublications(), getVideosAndAppearances()]).then((values) => {
      values.map((value) => {
        value.achievements && (finalObj.achievements = value.achievements);
        value.educations && (finalObj.educations = value.educations);
        value.experiences && (finalObj.experiences = value.experiences);
        value.publications && (finalObj.publications = value.publications);
        value.getVideosAndAppearances && (finalObj.getVideosAndAppearances = value.getVideosAndAppearances);
      });
      setState(finalObj);
      localStorage.setItem("state", JSON.stringify(finalObj));
    });
  }, []);

  return (
    <ApplicationContext.Provider value={state}>
      <Home />
      <About />
      <Education />
      <WorkingExperience />
      {/* <Achievement /> */}
      <Publications />
      <Videos />
      <GetInTouch />
      {/* <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Education" element={<Education />} />
        <Route path="Experience" element={<WorkingExperience />} />
        <Route path="Achievement" element={<Achievement />} />
        <Route path="Publication" element={<Publications />} />
        <Route path="GetInTouch" element={<GetInTouch />} />
      </Routes> */}
    </ApplicationContext.Provider>
  );
};

export default ApplicationRoutes;
