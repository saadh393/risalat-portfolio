import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { AUTH, DOMAIN } from "../Util";

function About() {
  const [about, setAbout] = useState(localStorage.getItem("about") ? localStorage.getItem("about") : "Loading...");

  useEffect(() => {
    fetch(DOMAIN + "/api/about-risalat-siddique", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAbout(data.data.attributes.about);
        localStorage.setItem("about", data.data.attributes.about);
      });
  }, []);

  return (
    <motion.div
      key={"about"}
      className="flex flex-col items-center py-10  snap-start min-h-screen"
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <h3 className="text-center text-[#FFCC30] uppercase text-2xl mt-10">More AbouT</h3>
      <h1 className="text-center text-white font-bold text-4xl ">Risalat Siddique</h1>
      <motion.div className="mx-auto py-3 mt-10 space-y-4">
        <ReactMarkdown>{about}</ReactMarkdown>
      </motion.div>
    </motion.div>
  );
}

export default About;
