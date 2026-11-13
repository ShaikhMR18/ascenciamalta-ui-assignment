import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";
import { nav } from "../../data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header__bar">
        <Logo />
        <button
          className="burger"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(!open)}
        >
          <span className="sr">Menu</span>
          <i />
          <i />
          <i />
        </button>
        <nav id="menu" className={`nav ${open ? "is-open" : ""}`} aria-label="Main">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end onClick={closeMenu}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--ghost nav__cta" onClick={closeMenu}>
            Apply now
          </Link>
        </nav>
      </div>
    </header>
  );
}
