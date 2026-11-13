import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";
import { nav } from "../../data";

const navIconPaths = {
  Home: "M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z",
  "About us": "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 6v.1m0 3v5",
  Contact: "M3 5.5h18v13H3zM3 6l9 7 9-7",
};

function NavIcon({ label }) {
  return (
    <svg className="nav__icon" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path d={navIconPaths[label]} />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header__bar">
        <Logo />
        <button
          className={`burger${open ? " is-open" : ""}`}
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((current) => !current)}
        >
          <span className="sr">{open ? "Close menu" : "Open menu"}</span>
          <i />
          <i />
          <i />
        </button>
        <nav id="menu" className={`nav ${open ? "is-open" : ""}`} aria-label="Main">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end onClick={closeMenu}>
              <NavIcon label={item.label} />
              <span>{item.label}</span>
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--ghost nav__cta" onClick={closeMenu}>
            <span className="nav__cta-label">STUDY WITH US</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
