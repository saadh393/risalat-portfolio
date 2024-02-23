import React from "react";
import Close from "./Close";
import Hamburger from "./Hamburger";

const MobileNav = ({ setDisplay, display }) => {
  return (
    <>
      <div onClick={() => setDisplay(!display)} className="overflow-hidden w-10 h-10 absolute right-5 top-5 z-50 cursor-pointer p-2 transition-all hover:bg-black/20 rounded-full ">
        {!display && <Hamburger />}
        {display && <Close />}
      </div>

      {display && (
        <div className="absolute left-0 top-0 right-0 bottom-0 w-screen h-screen bg-black/70 backdrop-blur z-[49] py-16 px-6">
          <h1 className="text-center text-2xl font-bold">Menu</h1>

          <ul className="h-full flex flex-col text-lg justify-center items-center space-y-8" onClick={() => setDisplay(!display)}>
            <a href="/#" className="hover:scale-105 transition-transform active:scale-95">
              <li>Home</li>
            </a>

            <a href="/#about" className="hover:scale-105 transition-transform active:scale-95">
              <li>About</li>
            </a>

            <a href="/#Education" className="hover:scale-105 transition-transform active:scale-95">
              <li>Education</li>
            </a>

            <a href="/#Experience" className="hover:scale-105 transition-transform active:scale-95">
              <li>Experience</li>
            </a>

            {/* <a href="/#Achievement" className="hover:scale-105 transition-transform active:scale-95">
              <li>Achievement</li>
            </a> */}

            <a href="/#Publication" className="hover:scale-105 transition-transform active:scale-95">
              <li>Publications & Articles</li>
            </a>

            <a href="/#videos-and-Appearances" className="hover:scale-105 transition-transform active:scale-95">
              <li>In the News</li>
            </a>

            <a href="/#GetInTouch" className="hover:scale-105 transition-transform active:scale-95">
              <li>Get In Touch</li>
            </a>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileNav;
