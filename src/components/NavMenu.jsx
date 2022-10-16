const NavMenu = () => {
  return (
    <nav className="h-full fixed left-0 z-[4] -translate-x-full  xl:translate-x-0 transition-transform">
      <div className="nav-menu h-full flex flex-col justify-center">
        <a href="/#home">Home</a>

        <a href="/#about">About</a>

        <a href="/#Education">Education</a>

        <a href="/#Experience">Experience</a>

        {/* <a href="/#Achievement">Achievement</a> */}

        <a href="/#Publication">Publications & Articles</a>

        <a href="/#videos-and-Appearances">Videos and Appearances</a>

        <a href="/#GetInTouch">Get In Touch</a>
      </div>
    </nav>
  );
};

export default NavMenu;
