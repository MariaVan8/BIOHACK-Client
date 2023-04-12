import { useState } from "react";
import "./NavBar.scss";
import logo from "../../assests/logo/logo1.png";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = (event) => {
    event.stopPropagation();
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="nav">
      <a href="/login" className="nav__login">
        Login
      </a>
      <img className="nav__logo" src={logo} />
      <div className="nav__toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul
        className={`nav__links ${isOpen ? "nav__links--open" : ""}`}
        onClick={handleClick}
      >
        <Link to={"/"} className="nav__link" onClick={closeMenu}>
          Home
        </Link>
        <li className="nav__link">Services</li>
        <li className="nav__link">About Us</li>
      </ul>
    </div>
  );
}
export default NavBar;
