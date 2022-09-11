import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav className="h-full fixed left-0 z-[4] hidden lg:block">
      <div className="nav-menu h-full flex flex-col justify-center">
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/Education">Education</Link>

        <Link to="/Experience">Experience</Link>

        <Link to="/Achievement">Achievement</Link>

        <Link to="/Publication">Publication</Link>

        <Link to="/GetInTouch">Get In Touch</Link>
      </div>
    </nav>
  );
};

export default NavMenu;
