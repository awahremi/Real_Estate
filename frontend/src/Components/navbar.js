import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import "./navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/"><img src={logo} alt="logo"/></Link>
                <Link to="/"><p>Cool Estates</p></Link>

                <ul className="nav-center">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/properties">Properties</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
            <div >
                <ul className="nav-right">
                    <li><Link to="/login"> Login</Link></li>
                
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </div>
            
        </nav>
        )
};

export default Navbar;