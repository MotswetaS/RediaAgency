import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `transition-colors duration-200 hover:text-[#FFC71F] ${
      isActive ? "underline" : ""
    }`;

  return (
    <header className="w-full bg-[#094C61] text-white h-20 fixed top-0 z-10 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-4 md:px-10 lg:px-20">
        {/* Logo + Hamburger */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <NavLink to="/" className="flex items-center">
            <img
              className="h-10 w-10"
              src="src/assets/redia logo.png"
              alt="Logo"
            />
          </NavLink>

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* NAV */}
        <nav
          className={`
            absolute top-full left-0 w-full bg-[#094C61]
            md:static md:w-auto md:bg-transparent

            overflow-hidden transition-all duration-300 ease-in-out

            ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}

            md:max-h-full md:opacity-100 md:overflow-visible
          `}
        >
          <ul className="flex flex-col items-end gap-6 md:flex-row md:items-center md:gap-20 pr-4 md:pr-0">
            <li>
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={linkClass}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkClass}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/case-studies" className={linkClass}>
                Case Studies
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkClass}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
