import { Link } from "react-router-dom";
import "./main.css"
import house from "../images/house.jpg"

const Main = () => {
    return (
        <div className="main">
            <div className="main-container">
                <div classname="main-left">
                    <h1>Find the best <br />real estate<br /> properties</h1>
                    <br />
                    <span>At affordable prices</span>
                    <br />
                    <br />
                    <button>
                        <Link to="/register">Get Started</Link>
                    </button>
                </div>
                <div className="main-right">
                    <img src={house} alt="house" />
                </div>
            </div>
        </div>
    )
};

export default Main;