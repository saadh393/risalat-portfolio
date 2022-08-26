const NavMenu = () => {
  return (
    <nav className="h-full fixed left-0 z-[4]">
      <ul className="h-full flex flex-col justify-center gap-10">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">About</a>
        </li>

        <li>
          <a href="#">Education</a>
        </li>

        <li>
          <a href="#">Experience</a>
        </li>

        <li>
          <a href="#">Achievement</a>
        </li>

        <li>
          <a href="#">Publication</a>
        </li>

        <li>
          <a href="#">Get In Touch</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
