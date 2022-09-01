import { BrowserRouter } from "react-router-dom";
import Background from "./components/Background";
import NavMenu from "./components/NavMenu";

function Layout({ children }) {
  return (
    <BrowserRouter>
      <div className="min-h-screen h-screen text-white">
        <NavMenu />
        <section className="max-w-4xl h-full mx-auto  relative z-[3] grid place-items-center">{children}</section>
        <Background />
      </div>
    </BrowserRouter>
  );
}

export default Layout;
