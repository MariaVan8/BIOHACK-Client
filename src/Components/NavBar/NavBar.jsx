import { useState } from "react";
import "./NavBar.scss";
import logo from "../../assests/logo/logo.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <img className="nav__logo" src={logo} />
      <div className="nav__toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav__links ${isOpen ? "nav__links--open" : ""}`}>
        <li className="nav__link">Home</li>
        <li className="nav__link">Services</li>
        <li className="nav__link">About Us</li>
      </ul>
    </div>
  );
}
export default NavBar;
