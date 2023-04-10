import { useState } from "react";
import { Link } from "react-router-dom";
import hero from "../../assests/Images/hero.png";
import microscope from "../../assests/logo/microscope1.png";
import lab from "../../assests/logo/laboratory.png";
import thesis from "../../assests/logo/graduation.png";
import "./../WelcomePage/WelcomePage.scss";

function WelcomePage() {
  return (
    <>
      <div className="hero-container">
        <img src={hero} className="welcome" />
        <h1 className="hero-title">Welcome!</h1>
        <p className="hero-subtitle">First Community Lab in Quito</p>
      </div>
      <Link to="/courses" className="services__box">
        <div className="services">
          <img className="services__logo" src={microscope} />
          <p className="services__text">Microbiology Courses</p>
        </div>
      </Link>
      <Link to="/rental" className="services__box">
        <div className="services">
          <img className="services__logo" src={lab} />
          <p className="services__text">Lab Rentals</p>
        </div>
      </Link>
      <Link to="/thesis" className="services__box">
        <div className="services">
          <img className="services__logo" src={thesis} />
          <p className="services__text">Thesis Guidance</p>
        </div>
      </Link>
      <div className="btn__wrapper">
        <Link className="btn__login" to="/login">
          Login
        </Link>
        <Link className="btn__signup" to="/signup">
          Sign Up
        </Link>
      </div>

      {/* <div className="btn__wrapper">
        <Link className="btn__login-link" to="/login">
          <a className="btn__login">Login</a>
        </Link>
        <Link className="btn__signup-link" to="/signup">
          <a className="btn__signup">Sign Up</a>
        </Link>
      </div> */}
    </>
  );
}

export default WelcomePage;
