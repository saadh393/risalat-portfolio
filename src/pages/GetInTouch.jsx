import { motion } from "framer-motion";
import React from "react";

function GetInTouch() {
  return (
    <div className="flex flex-col items-center py-8 justify-center min-h-screen snap-start" id="GetInTouch">
      <h1 className="text-center text-white font-bold text-4xl">Get In touch</h1>
      <h4 className="text-center text-white font-thin text-2xl mt-2">I would love to hear from you </h4>

      <div className="mx-auto my-3 mt-10 grid grid-cols-2 gap-10  ">
        <div className="space-y-5 border-r w-full pr-12">
          <ActionButton
            icon={
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 19 33"
                className="group-hover:fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5621 5.47804H19V0.231049C17.3354 0.0748719 15.6629 -0.00223456 13.9894 4.92757e-05C9.0154 4.92757e-05 5.61405 2.73905 5.61405 7.75504V12.078H0V17.952H5.61405V33H12.3436V17.952H17.9394L18.7806 12.078H12.3436V8.33254C12.3436 6.60004 12.8556 5.47804 15.5621 5.47804Z"
                  fill="#fff"
                />
              </svg>
            }
            label="Facebook"
            color={"bg-[#FD3259]"}
            index={0}
            href="https://web.facebook.com/siddique.risalat"
          />
          <ActionButton
            icon={
              <svg width="24px" height="24px" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 4.18561C0 3.01765 0.401194 2.05411 1.20355 1.29498C2.0059 0.535815 3.049 0.15625 4.33277 0.15625C5.59364 0.15625 6.61377 0.529964 7.39322 1.27746C8.19557 2.0483 8.59677 3.05269 8.59677 4.29072C8.59677 5.41193 8.20706 6.34625 7.42761 7.09375C6.62525 7.86458 5.5707 8.25 4.264 8.25H4.22961C2.96874 8.25 1.94861 7.86458 1.16916 7.09375C0.389709 6.32292 0 5.35352 0 4.18561ZM0.447032 34.8438V11.4384H8.08096V34.8438H0.447032ZM12.3106 34.8438H19.9445V21.7746C19.9445 20.957 20.0362 20.3264 20.2196 19.8826C20.5405 19.0884 21.0277 18.4168 21.681 17.8679C22.3344 17.319 23.1539 17.0445 24.1397 17.0445C26.7073 17.0445 27.9911 18.8081 27.9911 22.3352V34.8438H35.625V21.4242C35.625 17.9672 34.8226 15.3452 33.2179 13.5582C31.6132 11.7713 29.4927 10.8778 26.8563 10.8778C23.899 10.8778 21.5951 12.1742 19.9445 14.767V14.8371H19.9101L19.9445 14.767V11.4384H12.3106C12.3564 12.1859 12.3793 14.5101 12.3793 18.411C12.3793 22.3119 12.3564 27.7894 12.3106 34.8438Z"
                  fill="#fff"
                />
              </svg>
            }
            label="Linkedin"
            color={"bg-[#405FDB]"}
            index={1}
            href="https://www.linkedin.com/in/risalat-siddique/"
          />
          <ActionButton
            icon={
              <svg width="24px" height="24px" viewBox="0 0 41 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M36.125 0.5H4.125C1.915 0.5 0.145 2.29 0.145 4.5L0.125 28.5C0.125 30.71 1.915 32.5 4.125 32.5H36.125C38.335 32.5 40.125 30.71 40.125 28.5V4.5C40.125 2.29 38.335 0.5 36.125 0.5ZM36.125 8.5L20.125 18.5L4.125 8.5V4.5L20.125 14.5L36.125 4.5V8.5Z"
                  fill="#fff"
                />
              </svg>
            }
            label="Email"
            color={"bg-[#1BD741]"}
            index={2}
            href="mailto:risalat@gmail.com"
          />
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

function ActionButton({ label, icon, color, index, href }) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: index * 0.2, ease: "anticipate" }}
      className={`px-10 py-2 cursor-pointer transition-all hover:scale-105 active:scale-95 rounded-full flex items-center justify-center ${color} gap-2`}
    >
      <div className="w-[25px]">{icon}</div>
      <span className="hidden md:block">{label}</span>
    </motion.a>
  );
}

export default GetInTouch;
