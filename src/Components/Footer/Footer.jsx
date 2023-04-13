import React from "react";
import "../Footer/Footer.scss";
import instagram from "../../assests/logo/instagram.png";
import facebook from "../../assests/logo/facebook.png";
import gmail from "../../assests/logo/gmail.png";
import whatsapp from "../../assests/logo/whatsapp.png";
import location from "../../assests/logo/location.png";
import phone from "../../assests/logo/phone.png";
import mail from "../../assests/logo/mail.png";
import logo from "../../assests/logo/single.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__box">
          <div className="footer__container">
            <img className="footer__icons" src={location} />
            <p className="footer__text">Av. Amazonas N30-240 y Eloy Alfaro</p>
          </div>
          <div className="footer__container">
            <img className="footer__icons" src={phone} />
            <p className="footer__text">099-878-969</p>
          </div>
          <div className="footer__container">
            <img className="footer__icons" src={mail} />
            <p className="footer__text">biohack@hotmail.com</p>
          </div>
        </div>

        <div className="footer__box1">
          <p className="footer__text">Follow Us: </p>
          <div className="footer__wrapper">
            <img className="footer__icons" src={instagram} alt="instagram" />
            <img className="footer__icons" src={facebook} alt="facebook" />
            <img className="footer__icons" src={gmail} alt="gmail" />
            <img className="footer__icons" src={whatsapp} alt="whatsapp" />
          </div>
        </div>

        <img src={logo} alt="logo" className="footer__logo" />
      </div>
    </>
  );
}

export default Footer;
