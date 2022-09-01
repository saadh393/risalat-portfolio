import React from "react";
import Email from "../components/SocialMedia/Email";
import Facebook from "../components/SocialMedia/Facebook";
import Linkedin from "../components/SocialMedia/Linkedin";
import heroPicture from "../images/risalat-siddik.png";

function Home() {
  return (
    <div className="grid grid-cols-2 items-center">
      <div className="w-full">
        <h3 className="text-sm text-slate-200 ">Hello I am</h3>
        <h1 className="text-slate-50 font-black text-4xl">Risalat Siddique</h1>
        <p className="text-sm text-slate-200 font-light mt-4 leading-6">
          Digital Transformation Learntrepreneur for Brands, Finance, Marketing, Social and Infrastructure Development
          Sectors
        </p>
        <ul className="flex gap-2 my-4">
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
      </div>

      {/* Image */}
      <div>
        <img src={heroPicture} alt="Risalat Siddik" />
      </div>
    </div>
  );
}

export default Home;
