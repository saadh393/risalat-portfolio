import { motion } from "framer-motion";
import React from "react";
import Email from "../components/SocialMedia/Email";
import Facebook from "../components/SocialMedia/Facebook";
import Linkedin from "../components/SocialMedia/Linkedin";
import heroPicture from "../images/risalat-siddik.webp";
// import heroPicture from "../images/risalat-siddik.png";

function Home() {
  return (
    <div className="max-w-5xl flex flex-col-reverse md:flex-row items-center min-h-screen h-full snap-start" id="home">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex-1"
      >
        <h3 className="text-base lg:text-xl text-slate-200 ">Hello I am</h3>
        <h1 className="text-slate-50 font-black text-4xl md:text-5xl my-4">Risalat Siddique</h1>
        <p className="text-base lg:text-lg text-slate-200 font-light leading-6">
          Digital Transformation Learntrepreneur for Brands, Finance, Marketing, Social and Infrastructure Development
          Sectors
        </p>
        <ul className="flex gap-2 my-6">
          <li>
            <a
              href="https://web.facebook.com/siddique.risalat"
              target="_blank"
              title="Risalat Siddique Facebook Profile"
            >
              <Facebook />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/risalat-siddique/"
              target="_blank"
              title="Risalat Siddique Linkedin Profile"
            >
              <Linkedin />
            </a>
          </li>

          <li>
            <a href="mailto:risalat@gmail.com">
              <Email />
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex items-end"
      >
        <img src={heroPicture} alt="Risalat Siddik" className="w-[300px] md:w-[400px]" />
      </motion.div>
    </div>
  );
}

export default Home;
