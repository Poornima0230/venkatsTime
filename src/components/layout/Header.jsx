import { Link, NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../../styles/header.css";
import venkatLogo from "../../assets/venkatLogo.jpg";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPubOpen, setIsPubOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsPubOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header ref={headerRef}>
      <div className="header">
        <div
          className="logo"
          // data-aos="zoom-in"
        >
          <img src={venkatLogo} alt="VenkatsTimeLogo" />
          <h1>Venkat's Time</h1>
        </div>

        {/* Logo */}

        {/* Navigation */}

        <nav
          className="nav"
          // data-aos="zoom-in"
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li
              className={`event-tab ${isOpen ? "open" : ""}`}
              onClick={() => {
                setIsOpen(!isOpen);
                setIsPubOpen(false);
              }}
            >
              <div className="event-nav">
                Events <RiArrowDropDownLine className="drop-arrow" />
                {isOpen && (
                  <ul className="dropdown">
                    <li>
                      <Link to="/upcomingEvents">Upcoming Events</Link>
                      <Link to="/releasedEvents">Old Events</Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li
              className={`Pub-tab ${isPubOpen ? "open" : ""}`}
              onClick={() => {
                setIsPubOpen(!isPubOpen);
                setIsOpen(false);
              }}
            >
              <div className="Pub-nav">
                Publications <RiArrowDropDownLine className="drop-arrow" />
                {isPubOpen && (
                  <ul className="Pub-dropdown">
                    <li>
                      <Link to="/upcomingPublications">
                        Upcoming Publications
                      </Link>
                      <Link to="/releasedPublications">
                        Released Publications
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
