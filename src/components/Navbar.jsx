import { Link, useLocation } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-text">Space</span>
          <span className="brand-text-alt">Blog</span>
        </Link>

        <div className="nav-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            <span className="nav-text">Home</span>
          </Link>
          <Link
            to="/about"
            className={`nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            <span className="nav-text">About</span>
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            <span className="nav-text">Contact</span>
          </Link>
        </div>
        <div className="user-button-container">
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
