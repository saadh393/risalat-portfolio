const NavMenu = () => {
  return (
    <nav className="h-full fixed left-0 z-[4] hidden lg:block">
      <div className="nav-menu h-full flex flex-col justify-center">
        <a href="/#home">Home</a>

        <a href="/#about">About</a>

        <a href="/#Education">Education</a>

        <a href="/#Experience">Experience</a>

        {/* <a href="/#Achievement">Achievement</a> */}

        <a href="/#Publication">Publication</a>

        <a href="/#GetInTouch">Get In Touch</a>
      </div>
    </nav>
  );
};

export default NavMenu;
