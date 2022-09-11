import { motion } from "framer-motion";
import { useState } from "react";
import EarthImage from "../../public/images/overlay/earth.png";
import Particales from "./Particales";

const Background = () => {
  const [load, setLoaded] = useState(false);
  return (
    <div
      className="min-h-screen w-full h-full overflow-hidden fixed left-0 top-0 z-0 bg-[#121F3A]"
      style={{ background: "radial-gradient(51.91% 51.91% at 50% 48.09%, #242D41 0%, #1D2332 100%)" }}
    >
      {/* top Red Overlay */}
      <div
        animate={{ scale: [1, 1.5, 1.8], x: [-50, 150, 80], y: [-20, 10, 0, 0] }}
        transition={{ duration: 10, type: "tween", repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="w-[300px] h-[300px] z-[1] bg-[#FA3A3A] rounded-full -top-28 right-20 blur-3xl opacity-20 absolute"
      ></div>

      {/* Bottom Red Overlay */}
      <motion.div
        animate={{ scale: [1, 1.5, 1.8], x: [-100, 150, 80], y: [-20, 10, 0, 0] }}
        transition={{ duration: 10, type: "tween", repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="w-[250px] h-[250px] z-[1] bg-[#FA3A3A] rounded-full -bottom-20 -left-20 blur-3xl opacity-20 absolute"
      ></motion.div>

      {/* Earth */}
      <motion.img
        variants={load ? { y: 0 } : { y: 300 }}
        onLoad={() => setLoaded(true)}
        className="absolute left-0 bottom-0 object-contain z-[1] select-none"
        style={{ filter: "drop-shadow(0px -18px 80px rgba(10,77,243,.35))" }}
        src={EarthImage}
        alt="Earth Image Background"
      />
      <motion.div
        initial={{ scale: 0, x: 0 }}
        animate={{ scale: [1, 0.5, 0.8], x: [-220, 250, 100], y: [-20, 10, 0, 0] }}
        transition={{ duration: 10, type: "tween", repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="w-[250px] h-[150px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 "
        style={{ background: "rgba(10, 77, 243, 1)", filter: "blur(160px)" }}
      ></motion.div>

      <Particales />
    </div>
  );
};

export default Background;
