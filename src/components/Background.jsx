import Particales from "./Particales";

const Background = () => {
  return (
    <div
      className="min-h-screen w-full h-full overflow-hidden fixed left-0 top-0 z-0 bg-[#121F3A]"
      style={{ background: "radial-gradient(51.91% 51.91% at 50% 48.09%, #242D41 0%, #1D2332 100%);" }}
    >
      {/* top Red Overlay */}
      <div className="w-[300px] h-[300px] z-[1] bg-[#FA3A3A] rounded-full -top-28 right-20 blur-3xl opacity-20 absolute"></div>

      {/* Bottom Red Overlay */}
      <div className="w-[250px] h-[250px] z-[1] bg-[#FA3A3A] rounded-full -bottom-20 -left-20 blur-3xl opacity-20 absolute"></div>

      {/* Earth */}
      <img
        className="absolute left-0 bottom-0 object-contain z-[1] select-none"
        style={{ filter: "drop-shadow(0px -18px 80px rgba(10,77,243,.35))" }}
        src="./images/overlay/earth.png"
      />
      <div
        className="w-[250px] h-[150px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 "
        style={{ background: "rgba(10, 77, 243, 1)", filter: "blur(160px)" }}
      ></div>

      <Particales />
    </div>
  );
};

export default Background;
