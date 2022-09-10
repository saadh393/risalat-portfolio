import { useState } from "react";
import Background from "./components/Background";
import MobileNav from "./components/MobileNav";
import NavMenu from "./components/NavMenu";

function Layout({ children }) {
  const [display, setDisplay] = useState(false);

  return (
    <div className={`min-h-screen h-screen text-white ${display && "overflow-hidden"}`}>
      <NavMenu />
      <MobileNav display={display} setDisplay={setDisplay} />
      <section className="max-w-5xl px-6 md:px-8 lg:px-0 h-full mx-auto  relative z-[3] grid place-items-center">
        {children}
      </section>
      <Background />
    </div>
  );
}

export default Layout;
