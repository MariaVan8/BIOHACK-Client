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
            <div className="footer_address">
              <p className="footer__text">Av. Amazonas N30-240 y Eloy Alfaro</p>
              <p className="footer__text"> Quito - Ecuador</p>
            </div>
          </div>
          <div className="footer__container">
            <img className="footer__icons" src={phone} />
            <p className="footer__text">+593 993061886</p>
          </div>
          <div className="footer__container">
            <img className="footer__icons" src={mail} />
            <p className="footer__text">biohackuio@gmail.com</p>
          </div>
        </div>

        <div className="footer__box1">
          <p className="footer__text">Follow Us: </p>
          <div className="footer__wrapper">
            <a href="https://instagram.com/biohack_uio?igshid=YmMyMTA2M2Y=">
              <img className="footer__icons" src={instagram} alt="instagram" />
            </a>
            <a href="https://www.facebook.com/BioHackUIO?mibextid=ZbWKwL">
              <img className="footer__icons" src={facebook} alt="facebook" />
            </a>
            <img className="footer__icons" src={gmail} alt="gmail" />
            <a href="https://wa.me/593998015698">
              <img className="footer__icons" src={whatsapp} alt="whatsapp" />
            </a>
          </div>
        </div>

        <img src={logo} alt="logo" className="footer__logo" />
      </div>
    </>
  );
}

export default Footer;
