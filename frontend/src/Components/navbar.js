import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "./CSS/navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-container-left">
          <ul>
            <li>
              {" "}
              <Link className="logo" to="/">
                <img src={logo} alt="Logo" />
                <div>Real Estate</div>
              </Link>
            </li>
            <li>
              <Link to="/properties">Properties</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="nav-container-right">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
