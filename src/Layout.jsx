import { useState } from "react";
import Background from "./components/Background";
import MobileNav from "./components/MobileNav";
import NavMenu from "./components/NavMenu";
import EarthImage from "../public/images/overlay/earth.png";
import { motion } from "framer-motion";

function Layout({ children }) {
  const [display, setDisplay] = useState(false);
  const [load, setLoaded] = useState(false);
  return (
    <div
      className={`min-h-screen h-screen text-white ${
        display && "overflow-hidden"
      } w-full  scroll-smooth overflow-scroll`}
      style={{ scrollSnapType: "y proximity " }}
    >
      <NavMenu />
      <MobileNav display={display} setDisplay={setDisplay} />
      {/* Earth */}
      <motion.img
        variants={load ? { y: 0 } : { y: 300 }}
        onLoad={() => setLoaded(true)}
        className="fixed left-0 -bottom-0 scale-150 md:scale-75 md:translate-y-7  object-contain z-[100] select-none "
        style={{ filter: "drop-shadow(0px 18px 80px rgba(10,77,243,1))" }}
        src={EarthImage}
        alt="Earth Image Background"
      />
      {/* max-w-5xl */}
      <section className=" px-6 md:px-8 lg:px-0 mx-auto  relative z-[3] grid place-items-center ">{children}</section>
      <Background />
    </div>
  );
}

export default Layout;
