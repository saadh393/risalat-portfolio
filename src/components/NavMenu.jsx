import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav className="h-full fixed left-0 z-[4]">
      <ul className="h-full flex flex-col justify-center">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <a href="/about">About</a>
        </li>

        <li>
          <Link to="/Education">Education</Link>
        </li>

        <li>
          <Link to="/Experience">Experience</Link>
        </li>

        <li>
          <Link to="/Achievement">Achievement</Link>
        </li>

        <li>
          <Link to="/Publication">Publication</Link>
        </li>

        <li>
          <Link to="/GetInTouch">Get In Touch</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
