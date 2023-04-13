import React from "react";
import "../AboutUs/AboutUs.scss";

function AboutUs() {
  return (
    <>
      <div className="card__container">
        <div className="card">
          <h3>About Us</h3>
          <p className="card__text">
            At our community laboratory in Ecuador, we strive to democratize
            Science and bring the knowledge and technology of Biological and
            Experimental Sciences to people of all backgrounds and identities.
          </p>
          <h3>Vision</h3>
          <p className="card__text">
            Our vision is to empower the community to use Biotechnology in the
            search for practical applications and solutions that are connected
            to their daily lives and for the development of the country.
          </p>
          <h3>Mission</h3>
          <p className="card__text">
            Our mission is to foster an inclusive community where all
            individuals can learn, experiment, research, innovate and create
            meaningful solutions in Biotechnology and Life Sciences.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
