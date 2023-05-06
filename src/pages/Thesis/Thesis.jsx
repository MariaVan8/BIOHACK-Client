import React from "react";
import "../Thesis/Thesis.scss";

function Thesis() {
  return (
    <>
      <div className="thesis__image" alt="thesis"></div>
      <p className="thesis__title">We offer:</p>
      <h1 className="thesis__header">
        Technical Assistance and Support Services for University Students and
        Laboratory Professionals
      </h1>
      <div className="thesis__wrapper">
        <h1 className="thesis__desc">Thesis Workshops</h1>
        <p className="thesis__item">
          Hands-on training and skill-building sessions for students and
          professionals focused on preparing, writing, and presenting their
          theses.
        </p>
        <h1 className="thesis__desc">Thesis Advisory Services</h1>
        <p className="thesis__item">
          {" "}
          Mentorship and guidance for undergraduate and graduate students
          pursuing research projects and theses, including help with topic
          selection, literature review, methodology, data analysis, and more.
        </p>
        <h1 className="thesis__desc">Thesis Formatting and Editing</h1>
        <p className="thesis__item">
          {" "}
          Expert support for students and professionals in formatting,
          proofreading, and editing their thesis manuscripts to meet academic
          standards and guidelines.
        </p>
      </div>
      <p className="thesis__subtitle">Available Technology</p>
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
