import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav className="h-full fixed left-0 z-[4] hidden lg:block">
      <ul className="h-full flex flex-col justify-center">
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/about">
          <li>About</li>
        </Link>

        <Link to="/Education">
          <li>Education</li>
        </Link>

        <Link to="/Experience">
          <li>Experience</li>
        </Link>

        <Link to="/Achievement">
          <li>Achievement</li>
        </Link>

        <Link to="/Publication">
          <li>Publication</li>
        </Link>

        <Link to="/GetInTouch">
          <li>Get In Touch</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavMenu;
