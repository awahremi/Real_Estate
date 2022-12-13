import { Link } from "react-router-dom";
import Onboarding from "../Components/onboarding";
import PropertiesSample from "../Components/propertiesSample";
import house from "../images/house.jpg";
import "./CSS/Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-container-left">
          <h1>
            Find the best
            <br /> real estate
            <br /> properties
          </h1>
          <br />
          <span>At affordable prices</span>
          <br />
          <br />
          <button>
            <Link to="/register">Get Started</Link>
          </button>
          <span></span>
        </div>
        <div className="main-container-right">
          <img src={house} alt="House" />
        </div>
      </div>
      <PropertiesSample />
      <Onboarding />
    </div>
  );
};

export default Main;
