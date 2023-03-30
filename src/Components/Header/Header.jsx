import { NavLink } from "react-router-dom";
import logo from "../../assests/logo/logo.jpg";
import "../Header/Header.scss";

function Header() {
  return (
    <>
      <header className="header">
        <NavLink className="header__logo" to="/">
          <img className="header__logo-img" src={logo} alt="logo biohack" />
        </NavLink>

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "nav__link nav__link--active" : "nav__link"
                }
              >
                Services
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/reservations"
                className={({ isActive }) =>
                  isActive ? "nav__link nav__link--active" : "nav__link"
                }
              >
                Reservations
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  isActive ? "nav__link nav__link--active" : "nav__link"
                }
              >
                About Us
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? "nav__link nav__link--active" : "nav__link"
                }
              >
                Gallery
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
