import "./CSS/Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        {"Copyright © Real Estate "}
        {new Date().getFullYear()}
      </p>
    </div>
  );
};
export default Footer;
