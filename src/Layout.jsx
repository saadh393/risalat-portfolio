import Background from "./components/Background";
import NavMenu from "./components/NavMenu";

function Layout({ children }) {
  return (
    <div className="min-h-screen h-screen text-white">
      <NavMenu />
      <section className="max-w-6xl h-full mx-auto  relative z-[3]">{children}</section>
      <Background />
    </div>
  );
}

export default Layout;
