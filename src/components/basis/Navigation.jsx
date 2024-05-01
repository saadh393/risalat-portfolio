import { useEffect, useRef, useState } from "react";
import Hamburger from "../Hamburger";
import Close from "../Close";

export default function Navigation() {
  const mobileNav = useRef(null);
  const mobileNavContainer = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Section Tracker
    const sectionIds = ["টানাপোড়েন", "কে", "কর্মপরিধি", "পরিশেষে"];
    const positions = sectionIds.map((id) => document.getElementById(id).offsetTop);

    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      positions.forEach((position, index) => {
        if (scrollPosition >= position) {
          document.querySelectorAll(".basis-nav a").forEach((link) => {
            link.classList.remove("active");
          });

          document.querySelectorAll(".basis-nav a")[index].classList.add("active");
        }

        if (scrollPosition < positions[0]) {
          document.querySelectorAll(".basis-nav a").forEach((link) => {
            link.classList.remove("active");
          });
        }
      });
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        document.body.classList.remove("overflow-hidden");
        mobileNav.current.style.transform = "translateX(100%)";
        mobileNavContainer.current.style.opacity = "0";
        setTimeout(() => {
          mobileNavContainer.current.style.display = "none";
        }, 300);
        setIsOpen(false);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth > 1024) {
          document.body.classList.remove("overflow-hidden");
          mobileNav.current.style.transform = "translateX(100%)";
          mobileNavContainer.current.style.opacity = "0";
          setTimeout(() => {
            mobileNavContainer.current.style.display = "none";
          }, 300);
          setIsOpen(false);
        }
      });
    };
  });

  const menuItems = [
    { name: "টানাপোড়েন এর সংসার", link: "টানাপোড়েন" },
    { name: "কে এই ড. মুহম্মদ রিসালাত সিদ্দীক?", link: "কে" },
    { name: "কর্মপরিধি", link: "কর্মপরিধি" },
    { name: "পরিশেষে", link: "পরিশেষে" },
  ];

  const handleClick = () => {
    // Check if device is mobile/table or web
    if (window.innerWidth < 1024) {
      // If mobile/tablet, add/remove class to body to prevent scrolling
      if (!isOpen) {
        document.body.classList.add("overflow-hidden");
        mobileNavContainer.current.style.display = "block";
        setTimeout(() => {
          mobileNavContainer.current.style.opacity = "1";
          mobileNav.current.style.transform = "translateX(0%)";
        }, 300);
        setIsOpen(true);
      }

      if (isOpen) {
        document.body.classList.remove("overflow-hidden");
        mobileNav.current.style.transform = "translateX(100%)";
        mobileNavContainer.current.style.opacity = "0";
        setTimeout(() => {
          mobileNavContainer.current.style.display = "none";
        }, 300);
        setIsOpen(false);
      }
    }
  };

  return (
    <div>
      <nav className="z-[999] shadow-md basis-nav-container" onClick={handleClick}>
        <div className="basis-hamburger cursor-pointer group">
          <div className="transition-all group-hover:scale-95">{isOpen ? <Close /> : <Hamburger />}</div>
        </div>
        <div className="basis-nav">
          {menuItems.map((item, index) => (
            <a href={`/basis#${item.link}`}>{item.name}</a>
          ))}
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className="basis-mobile-nav" ref={mobileNavContainer}>
        <div className="basis-menus " ref={mobileNav}>
          {menuItems.map((item, index) => (
            <a href={`/basis#${item.link}`} onClick={handleClick}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
