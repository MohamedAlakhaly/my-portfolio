import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
const NEON = "#39ff14";

const links = [
  { to: "/", label: "home", end: true },
  { to: "/services", label: "services" },
  { to: "/about", label: "about" },
  { to: "/certifications", label: "certs" },
  { to: "/projects", label: "projects" },
  { to: "/contact", label: "contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle = ({ isActive }) =>
    isActive ? "active-link nav-link" : "nav-link";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Syne:wght@600;700&display=swap');

        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 2.5rem;
          height: 64px;
          transition: all 0.4s ease;
          font-family: 'JetBrains Mono', monospace;
        }
        .navbar.scrolled {
          background: rgba(5,7,9,0.92);
          border-bottom: 1px solid ${NEON}22;
          backdrop-filter: blur(16px);
          box-shadow: 0 1px 30px ${NEON}11;
        }
        .navbar.top { background: transparent; }

        .logo {
          font-family: 'Syne', sans-serif;
          font-size: 1.15rem; font-weight: 700;
          color: #fff; text-decoration: none;
          display: flex; align-items: center; gap: 6px;
          letter-spacing: -0.01em;
        }
        .logo-bracket { color: ${NEON}; font-family: 'JetBrains Mono', monospace; font-size: 1rem; opacity: 0.7; }
        .logo-accent { color: ${NEON}; }

        .nav-links { display: flex; align-items: center; gap: 2px; list-style: none; margin: 0; padding: 0; }

        .nav-link {
          position: relative; padding: 6px 14px; border-radius: 6px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
          color: #777; text-decoration: none; transition: all 0.25s;
        }
        .nav-link::before {
          content: ''; position: absolute; inset: 0;
          border-radius: 6px; border: 1px solid transparent; transition: all 0.25s;
        }
        .nav-link:hover { color: ${NEON}; background: ${NEON}0d; }
        .nav-link:hover::before { border-color: ${NEON}33; }

        .active-link { color: ${NEON} !important; background: ${NEON}11 !important; text-shadow: 0 0 8px ${NEON}88; }
        .active-link::before { border-color: ${NEON}44 !important; box-shadow: inset 0 0 8px ${NEON}11; }
        .active-dot {
          position: absolute; bottom: 3px; left: 50%; transform: translateX(-50%);
          width: 3px; height: 3px; border-radius: 50%;
          background: ${NEON}; box-shadow: 0 0 6px ${NEON};
        }
        .nav-index { font-size: 9px; color: ${NEON}55; margin-right: 4px; }

        .nav-cta {
          margin-left: 1.5rem; padding: 7px 18px; border-radius: 6px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
          color: #050709; background: ${NEON}; border: none; cursor: pointer;
          text-decoration: none; transition: all 0.25s;
          box-shadow: 0 0 14px ${NEON}44; font-family: 'JetBrains Mono', monospace;
        }
        .nav-cta:hover { box-shadow: 0 0 24px ${NEON}88; transform: translateY(-1px); }

        .hamburger {
          display: none; background: none; border: 1px solid ${NEON}33; border-radius: 6px;
          width: 38px; height: 38px; align-items: center; justify-content: center;
          color: ${NEON}; cursor: pointer; transition: all 0.25s;
        }
        .hamburger:hover { background: ${NEON}11; border-color: ${NEON}66; }

        .mobile-drawer {
          position: fixed; top: 64px; left: 0; right: 0;
          background: rgba(5,7,9,0.97); border-bottom: 1px solid ${NEON}22;
          backdrop-filter: blur(20px); padding: 1.5rem 2rem 2rem;
          transform: translateY(-110%); opacity: 0;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); z-index: 99;
        }
        .mobile-drawer.open { transform: translateY(0); opacity: 1; }
        .mobile-links { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 4px; }
        .mobile-link {
          display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 8px;
          font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
          color: #777; text-decoration: none; border: 1px solid transparent; transition: all 0.2s;
          font-family: 'JetBrains Mono', monospace;
        }
        .mobile-link:hover { color: ${NEON}; background: ${NEON}0d; border-color: ${NEON}22; }
        .mobile-link.active-link { color: ${NEON}; background: ${NEON}0d; border-color: ${NEON}33; }
        .mobile-divider { height: 1px; background: linear-gradient(to right, ${NEON}22, transparent); margin: 1rem 0; }
        .mobile-cta {
          display: block; padding: 12px; border-radius: 8px; text-align: center;
          font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
          color: #050709; background: ${NEON}; text-decoration: none;
          font-family: 'JetBrains Mono', monospace; box-shadow: 0 0 18px ${NEON}44;
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .navbar { padding: 0 1.25rem; }
        }
      `}</style>

      <nav className={`navbar ${scrolled ? "scrolled" : "top"}`}>
        <NavLink to="/" className="logo">
          <span className="logo-bracket">[</span>
          <span>Mohamed</span>
          <span className="logo-accent">.</span>
          <span className="logo-bracket">]</span>
        </NavLink>
        <ul className="nav-links desktop-nav">
          {links.map(({ to, label, end }, i) => (
            <li key={to}>
              <NavLink to={to} end={end} className={linkStyle}>
                {({ isActive }) => (
                  <>
                    <span className="nav-index">0{i + 1}</span>
                    {label}
                    {isActive && <span className="active-dot" />}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        // desktop
        <Link to="/contact" className="nav-cta desktop-nav">
          Hire me →
        </Link>
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          <FontAwesomeIcon
            icon={open ? faXmark : faBars}
            style={{ fontSize: 16 }}
          />
        </button>
      </nav>

      <div className={`mobile-drawer ${open ? "open" : ""}`}>
        <ul className="mobile-links">
          {links.map(({ to, label, end }, i) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `mobile-link${isActive ? " active-link" : ""}`
                }
                onClick={() => setOpen(false)}
              >
                <span
                  style={{
                    color: "#39ff1444",
                    fontSize: 10,
                    fontFamily: "monospace"
                  }}
                >
                  0{i + 1}
                </span>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mobile-divider" />
        <Link
          to="/contact"
          className="mobile-cta"
          onClick={() => setOpen(false)}
        >
          Hire me →
        </Link>
      </div>
    </>
  );
}
