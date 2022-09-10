import { motion } from "framer-motion";
import React from "react";
import Email from "../components/SocialMedia/Email";
import Facebook from "../components/SocialMedia/Facebook";
import Linkedin from "../components/SocialMedia/Linkedin";
import heroPicture from "../images/risalat-siddik.png";

function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex-1"
      >
        <h3 className="text-base text-slate-200 ">Hello I am</h3>
        <h1 className="text-slate-50 font-black text-5xl my-6">Risalat Siddique</h1>
        <p className="text-base text-slate-200 font-light leading-6">
          Digital Transformation Learntrepreneur for Brands, Finance, Marketing, Social and Infrastructure Development
          Sectors
        </p>
        <ul className="flex gap-2 my-6">
          <li>
            <a href="#">
              <Facebook />
            </a>
          </li>

          <li>
            <a href="#">
              <Linkedin />
            </a>
          </li>

          <li>
            <a href="#">
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
        className="flex-1"
      >
        <img src={heroPicture} alt="Risalat Siddik" />
      </motion.div>
    </div>
  );
}

export default Home;
