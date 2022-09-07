import React from "react";
import { Link } from "react-router-dom";
import Close from "./Close";
import Hamburger from "./Hamburger";

const MobileNav = ({ setDisplay, display }) => {
  return (
    <>
      <div
        onClick={() => setDisplay(!display)}
        className="overflow-hidden w-10 h-10 absolute right-5 top-5 z-50 cursor-pointer p-2 transition-all hover:bg-black/20 rounded-full "
      >
        {!display && <Hamburger />}
        {display && <Close />}
      </div>

      {display && (
        <div className="absolute left-0 top-0 right-0 bottom-0 w-screen h-screen bg-black/70 backdrop-blur z-[49] py-16 px-6">
          <h1 className="text-center text-2xl font-bold">Menu</h1>

          <ul
            className="h-full flex flex-col text-lg justify-center items-center space-y-8"
            onClick={() => setDisplay(!display)}
          >
            <Link to="/" className="hover:scale-105 transition-transform active:scale-95">
              <li>Home</li>
            </Link>

            <Link to="/about" className="hover:scale-105 transition-transform active:scale-95">
              <li>About</li>
            </Link>

            <Link to="/Education" className="hover:scale-105 transition-transform active:scale-95">
              <li>Education</li>
            </Link>

            <Link to="/Experience" className="hover:scale-105 transition-transform active:scale-95">
              <li>Experience</li>
            </Link>

            <Link to="/Achievement" className="hover:scale-105 transition-transform active:scale-95">
              <li>Achievement</li>
            </Link>

            <Link to="/Publication" className="hover:scale-105 transition-transform active:scale-95">
              <li>Publication</li>
            </Link>

            <Link to="/GetInTouch" className="hover:scale-105 transition-transform active:scale-95">
              <li>Get In Touch</li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileNav;
