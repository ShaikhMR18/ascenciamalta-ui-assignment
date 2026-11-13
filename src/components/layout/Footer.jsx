import { Link } from "react-router-dom";
import { nav, school } from "../../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h3>{school.name}</h3>
          <p>{school.tagline}</p>
        </div>
        <div>
          <h3>Explore</h3>
          {nav.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Visit us</h3>
          <p>{school.address}</p>
          <a href={`mailto:${school.email}`}>{school.email}</a>
          <p>{school.phone}</p>
        </div>
      </div>
      <p className="footer__legal container">
        © {new Date().getFullYear()} {school.name}. UI redesign for assignment purposes.
      </p>
    </footer>
  );
}
