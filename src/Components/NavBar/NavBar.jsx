import { useState } from "react";
import "./NavBar.scss";
import logo from "../../assests/logo/logo-white.png";
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
      <Link className="nav__login" to={"/login"}>
        Login
      </Link>
      <Link className="nav__logo" to={"/"}>
        <img className="nav__logo" src={logo} />
      </Link>
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
        <Link className="nav__link" onClick={closeMenu} to={"/aboutus"}>
          <li>About Us</li>
        </Link>
      </ul>
    </div>
  );
}
export default NavBar;
