import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const isScrolledDown = scrollTop > 0;
      setScrolledDown(isScrolledDown);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-between align-center ${
        scrolledDown ? "down" : ""
      }`}
    >
      <Link to="/" className="logo" aria-label="Roni Egbu home">
        <img
          src="https://res.cloudinary.com/qaz2dc/image/upload/c_crop,h_200,w_550/v1693760194/Portfolio/roniegbu_vb3iz9.png"
          loading="lazy"
          alt="Roni Egbu"
        />
      </Link>
      <nav
        className={isOpen ? "open" : "close"}
        id="primary-navigation"
        aria-label="Primary navigation"
      >
        <ul>
          <li>
            <Link to="/">
              Home
              <span className="line"></span>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              Projects
              <span className="line"></span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact Me
              <span className="line"></span>
            </Link>
          </li>
        </ul>
      </nav>
      <button
        type="button"
        className={`burger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </button>
    </header>
  );
}

export default Nav;
