import { Link } from "react-router-dom";
import logoUrl from "../../assets/Ascencia-Malta-Logo.svg";

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Ascencia Malta home">
      <img src={logoUrl} alt="Ascencia Malta Logo" />
    </Link>
  );
}
