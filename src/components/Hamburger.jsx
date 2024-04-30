import React from "react";

const Hamburger = ({ color = "white" }) => {
  return (
    <svg
      id="hamburger"
      width="100%"
      height="100%"
      viewBox="0 0 16 15"
      data-state="closed"
      className="mr-4 lg:hidden block z-[99] relative"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="transition-all"
        id="one"
        x="6.85144"
        y="1.23901"
        width="8.85718"
        height="1.49418"
        rx="0.747088"
        fill={color}
      ></rect>
      <rect
        className="transition-all"
        id="two"
        x="0.193237"
        y="7.26367"
        width="15.5153"
        height="1.49418"
        rx="0.747088"
        fill={color}
        transform="rotate(0 0 0)"
      ></rect>
      <rect
        className="transition-all"
        id="three"
        x="4.2196"
        y="13.2584"
        width="11.4889"
        height="1.49418"
        rx="0.747088"
        fill={color}
        transform="rotate(0 0 0)"
      ></rect>
    </svg>
  );
};

export default Hamburger;
