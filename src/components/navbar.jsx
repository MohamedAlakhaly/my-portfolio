import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [navState, setNavState] = useState("close");

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-primary border-b-2 border-primary pb-1 capitalize transition duration-300 relative after:absolute "
      : "text-white hover:text-primary capitalize transition duration-300 relative after:absolute after:w-0 after:h-1 after:bg-primary/20 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full after:rounded-t-md";

  return (
    <div>
      <nav className="md:flex md:justify-between py-6 animate__animated animate__fadeInDown fixed w-full z-10 top-0 left-0 backdrop-blur-lg bg-gradient-to-r ">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer ml-3">
          <NavLink to="/my-portfolio/">
            <span className="hidden md:inline">Mohamed </span>
            <span className="text-primary">Al-Akhaly</span>
          </NavLink>
        </div>

        {/* Mobile Nav */}
        <div
          className={`${navState === "close"
            ? "hidden"
            : ""} w-full h-96 md:hidden mt-2 duration-300`}
        >
          <ul className="h-96 flex flex-col justify-around items-center">
            <li>
              <NavLink to="/my-portfolio/" end className={linkStyle}>
                home
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-portfolio/services" className={linkStyle}>
                services
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-portfolio/about" className={linkStyle}>
                about
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-portfolio/certifications" className={linkStyle}>
                certifications
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-portfolio/projects" className={linkStyle}>
                projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-portfolio/contact" className={linkStyle}>
                contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Menu Icons */}
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setNavState("open")}
          className={`${navState === "close"
            ? ""
            : "hidden"} text-primary absolute top-6 right-3 text-3xl mr-5 self-center md:hidden`}
        />
        <FontAwesomeIcon
          icon={faClose}
          onClick={() => setNavState("close")}
          className={`${navState === "open"
            ? ""
            : "hidden"} text-primary absolute top-6 right-3 text-3xl mr-5 self-center md:hidden`}
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex mr-10">
          <ul className="md:flex space-x-5">
            <li>
              <NavLink to="/my-portfolio/" end className={linkStyle}>
                home
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-portfolio/services" className={linkStyle}>
                services
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-portfolio/about" className={linkStyle}>
                about
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-portfolio/certifications" className={linkStyle}>
                certifications
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-portfolio/projects" className={linkStyle}>
                projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-portfolio/contact" className={linkStyle}>
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
