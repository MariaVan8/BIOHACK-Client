import React from "react";
import "../Thesis/Thesis.scss";
import thesis from "../../assests/Images/thesis1.png";

function Thesis() {
  return (
    <>
      <img className="thesis__image" src={thesis} alt="thesis" />
      <p className="thesis__title">We offer:</p>
      <div className="thesis__wrapper">
        <p className="thesis__item">
          -Practical Workshops for University Students and Laboratory
          Professionals
        </p>
        <p className="thesis__item">-Young Scientist Program</p>
        <p className="thesis__item">-Consulting and Technical Solutions</p>
      </div>
      <p className="thesis__subtitle">-Available Technology</p>
      <div className="thesis__wrapper">
        <p className="thesis__item">-Molecular Biology</p>
        <p className="thesis__item">-Microbiology</p>
        <p className="thesis__item">-Natural Extracts</p>
        <p className="thesis__item">-Sterile Area</p>
        <p className="thesis__item">-Agroindustry</p>
        <p className="thesis__item">-Microscopy</p>
        <p className="thesis__item">-Biomaterials</p>
      </div>
    </>
  );
}

export default Thesis;
