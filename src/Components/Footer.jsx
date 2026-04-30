import { NavLink } from "react-router-dom";
import { linkClass } from "../utils/linkClass";

const Footer = () => {
  return (
    <footer className="w-full bg-[#094C61] text-white py-4 md:py-10 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-10">
        {/* DIV 1 — LOGO */}
        <div>
          <NavLink to="/">
            <img
              src="src/assets/redia logo.png"
              alt="Logo"
              className="h-10 w-10"
            />
          </NavLink>
        </div>

        {/* DIV 2 — LINKS */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>

        {/* DIV 3 — COPYRIGHT */}
        <div className="text-sm opacity-80">
          © {new Date().getFullYear()} RediaBW. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
