import { Link, NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../../styles/header.css";
import venkatLogo from "../../assets/venkatLogo.jpg";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="header">
        <div className="logo" data-aos="zoom-in">
          <img src={venkatLogo} alt="VenkatsTimeLogo" />
          <h1>Venkat's Time</h1>
        </div>

        {/* Logo */}

        {/* Navigation */}

        <nav className="nav" data-aos="zoom-in">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li
              className={`event-tab ${isOpen ? "open" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="event-nav">
                Events <RiArrowDropDownLine className="drop-arrow" />
                {isOpen && (
                  <ul className="dropdown">
                    <li>
                      <Link to="/upcoming">Upcoming Events</Link>
                      <Link to="/released">Old Events</Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            {/* <li>
              <NavLink to="/brochure">Brochure</NavLink>
            </li> */}
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
