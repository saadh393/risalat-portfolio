import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Particales = () => {
  const options = useMemo(() => {
    return {
      backgroundMode: {
        enable: true,
        zIndex: 0,
      },
      background: {
        color: "#242D41",
        opacity: 0,
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
      },
      fpsLimit: 60,

      particles: {
        color: { value: "#fff" },
        links: {
          color: "#ffffff",
          distance: 800,
          enable: false,
          opacity: 0.2,
          width: 0.1,
        },
        move: {
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
          direction: "none",
          enable: true,
          outMode: "out",
          random: true,
          size: true,
          speed: 0.5,
          straight: false,
        },
        number: { density: { enable: true, area: 500 }, value: 100 },
        opacity: {
          random: true,
          value: 0.4,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 3,
        },
      },
      detectRetina: true,
    };
  });

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);
  return <Particles init={particlesInit} options={options} />;
};

export default Particales;
