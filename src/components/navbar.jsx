import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Navbar() {
  const [navState, setNavState] = useState("close");
  const navItemsStyle =
    "capitalize hover:text-primary hover:underline hover:underline-offset-8 ease-in duration-200";
  return (
    <div className="">
      <nav className="md:flex md:justify-between py-6 animate__animated animate__fadeInDown fixed w-full z-10 top-0 left-0  backdrop-blur-lg">
        <div className="text-2xl font-bold cursor-pointer ml-3">
          <a href="#">
            <span className="hidden md:inline">Mohamed </span>
            <span className="text-primary ">Al-Akhaly</span>
          </a>
        </div>

        <div
        className={`${navState == "close"
          ? "hidden"
          : ""} w-full h-96 md:hidden mt-2 duration-300`}
      >
        <ul className="h-96 flex flex-col justify-around items-center">
          <li>
            <a href="/my-portfolio/" className={navItemsStyle}>
              home
            </a>
          </li>
          <li>
            <a href="/my-portfolio/services" className={navItemsStyle}>
              services
            </a>
          </li>
          <li>
            <a href="/my-portfolio/about" className={navItemsStyle}>
              about
            </a>
          </li>
          <li>
            <a href="/my-portfolio/projects" className={navItemsStyle}>
              projects
            </a>
          </li>
          <li>
            <a href="/my-portfolio/contact" className={navItemsStyle}>
              contact
            </a>
          </li>
        </ul>
      </div>
      
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => {
            setNavState("open");
          }}
          className={`${navState === "close"
            ? ""
            : "hidden"} ' text-primary absolute top-6 right-3  text-3xl mr-5 self-center md:hidden '`}
        />

        <FontAwesomeIcon
          icon={faClose}
          onClick={() => setNavState("close")}
          className={`${navState === "open"
            ? ""
            : "hidden"}  text-primary absolute top-6 right-3 text-3xl mr-5 self-center md:hidden`}
        />

        <div className="hidden md:flex mr-10">
          <ul className="md:flex space-x-5">
            <li>
              <a
                href="/my-portfolio/"
                className={navItemsStyle}
                onClick={() => setActiveItem("home")}
              >
                home
              </a>
            </li>
            <li>
              <a
                href="/my-portfolio/services"
                className={navItemsStyle}
                onClick={() => setActiveItem("services")}
              >
                services
              </a>
            </li>
            <li>
              <a
                href="/my-portfolio/about"
                className={navItemsStyle}
                onClick={() => setActiveItem("about")}
              >
                about
              </a>
            </li>
            <li>
              <a
                href="/my-portfolio/projects"
                className={navItemsStyle}
                onClick={() => setActiveItem("projects")}
              >
                projects
              </a>
            </li>
            <li>
              <a
                href="/my-portfolio/contact"
                className={navItemsStyle}
                onClick={() => setActiveItem("contact")}
              >
                contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
{/* 
      <div
        className={`${navState == "close"
          ? "hidden"
          : ""} w-full h-96 md:hidden mt-20 fixed z-10 backdrop-blur-lg`}
      >
        <ul className="h-96 flex flex-col justify-around items-center">
          <li>
            <a href="/my-portfolio/" className={navItemsStyle}>
              home
            </a>
          </li>
          <li>
            <a href="/my-portfolio/services" className={navItemsStyle}>
              services
            </a>
          </li>
          <li>
            <a href="/my-portfolio/about" className={navItemsStyle}>
              about
            </a>
          </li>
          <li>
            <a href="/my-portfolio/projects" className={navItemsStyle}>
              projects
            </a>
          </li>
          <li>
            <a href="/my-portfolio/contact" className={navItemsStyle}>
              contact
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}
