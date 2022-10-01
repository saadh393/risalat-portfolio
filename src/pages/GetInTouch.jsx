import { motion } from "framer-motion";
import React from "react";
import Mail from "../components/SocialMedia/Mail";
import Phone from "../components/SocialMedia/Phone";
import WhatsApp from "../components/SocialMedia/WhatsApp";

function GetInTouch() {
  return (
    <div className="flex flex-col items-center py-8 justify-center min-h-screen snap-start" id="GetInTouch">
      <h1 className="text-center text-white font-bold text-4xl">Get In touch</h1>
      <h4 className="text-center text-white font-thin text-2xl mt-2">I would love to hear from you </h4>

      <div className="mx-auto my-3 mt-10 grid grid-cols-2 gap-10  ">
        <div className="space-y-5 border-r w-full pr-12">
          <ActionButton icon={<Mail />} label="Email" color={"bg-[#FD3259]"} index={0} />
          <ActionButton icon={<Phone />} label="Phone" color={"bg-[#405FDB]"} index={1} />
          <ActionButton icon={<WhatsApp />} label="Whatsapp" color={"bg-[#1BD741]"} index={2} />
        </div>
        <div>
          <h2 className="font-medium text-3xl">Come to see me !</h2>
          <h4 className=" my-2">Dhaka, Bangladesh</h4>
          <a href="" className="underline">
            Open on Goolge Map
          </a>
        </div>
      </div>
    </div>
  );
}

function ActionButton({ label, icon, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: index * 0.2, ease: "anticipate" }}
      className={`px-10 py-2 cursor-pointer transition-all hover:scale-105 active:scale-95 rounded-full flex items-center justify-center ${color} gap-2`}
    >
      <div className="w-[25px]">{icon}</div>
      <span>{label}</span>
    </motion.div>
  );
}

export default GetInTouch;
