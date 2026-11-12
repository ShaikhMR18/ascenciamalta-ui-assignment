import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logoUrl from "../assets/Ascencia-Malta-Logo.svg";
import { nav, school } from "../data";

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Ascencia Malta home">
      <img  src={logoUrl} alt="Ascencia Malta Logo"/>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header__bar">
        <Logo />
        <button className="burger" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          <span className="sr">Menu</span><i /><i /><i />
        </button>
        <nav id="menu" className={`nav ${open ? "is-open" : ""}`} aria-label="Main">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end>{n.label}</NavLink>
          ))}
          <Link to="/contact" className="btn btn--solid nav__cta">Apply now</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          {/* <Logo /> */}
          <h3>Ascencia Malta</h3>
          <p>{school.tagline}</p>
        </div>
        <div>
          <h3>Explore</h3>
          {nav.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
        </div>
        <div>
          <h3>Visit us</h3>
          <p>{school.address}</p>
          <a href={`mailto:${school.email}`}>{school.email}</a>
          <p>{school.phone}</p>
        </div>
      </div>
      <p className="footer__legal container">© {new Date().getFullYear()} Ascencia Malta. UI redesign for assignment purposes.</p>
    </footer>
  );
}
