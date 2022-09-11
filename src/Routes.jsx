import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { getAchievements, getEducations, getExperiences, getPublications } from "./dataFetch/data";
const About = lazy(() => import("./pages/About"));
const Achievement = lazy(() => import("./pages/Achievement"));
const GetInTouch = lazy(() => import("./pages/GetInTouch"));
const Home = lazy(() => import("./pages/Home"));
const Publications = lazy(() => import("./pages/Publications"));
const WorkingExperience = lazy(() => import("./pages/WorkingExperience"));
const Education = lazy(() => import("./pages/Education"));

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
        <Route
          path="about"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="Education"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Education />
            </Suspense>
          }
        />
        <Route
          path="Experience"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <WorkingExperience />
            </Suspense>
          }
        />
        <Route
          path="Achievement"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Achievement />
            </Suspense>
          }
        />
        <Route
          path="Publication"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Publications />
            </Suspense>
          }
        />
        <Route
          path="GetInTouch"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <GetInTouch />
            </Suspense>
          }
        />
      </Routes>
    </ApplicationContext.Provider>
  );
};

export default ApplicationRoutes;
