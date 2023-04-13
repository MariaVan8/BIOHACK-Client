import { useState } from "react";
import { Link } from "react-router-dom";

import microscope from "../../assests/logo/microscope1.png";
import lab from "../../assests/logo/laboratory.png";
import thesis from "../../assests/logo/graduation.png";

import "./../WelcomePage/WelcomePage.scss";
import AboutUs from "../../Components/AboutUs/AboutUs";

function WelcomePage() {
  return (
    <>
      <div className="hero-container">
        <div className="welcome">
          <h1 className="hero-title">BIOHACK UIO</h1>
          <p className="hero-subtitle">First Community Lab in Quito</p>
        </div>
      </div>
      <p className="hero__text">
        Join the first Community Biotechnology Laboratory and be part of a
        Scientific Revolution
      </p>
      <div className="services__container">
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
      </div>
      <p className="page__text">LET'S MAKE HISTORY TOGETHER!</p>
      <AboutUs />
      <p className="page__map-text">Find Us:</p>
      <div className="page__wrapper">
        <iframe
          className="page__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7960420634586!2d-78.4881284!3d-0.1914706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a656b7b7b5d%3A0x5b59af40a7bcbc03!2sEmbajada%20de%20Venezuela!5e0!3m2!1sen!2sca!4v1681244082326!5m2!1sen!2sca"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default WelcomePage;
