import React from "react";
import cultive from "../../assests/Images/cultive.jpg";
import meeting from "../../assests/Images/meeting.jpg";
import equipment from "../../assests/Images/equipment.jpg";
import microscope from "../../assests/Images/microscope1.jpg";
import lab from "../../assests/Images/lab3.jpg";
import "../RentalPage/RentalPage.scss";

function RentalPage() {
  return (
    <>
      <div className="rent_wrapper">
        <div className="rent__hero">
          <div className="rent__image-hero">
            <h1 className="rent__title">Lab Rental</h1>
            <p className="rent__subtitle">
              Modern Facilities for Scientific Innovation
            </p>
          </div>
        </div>
      </div>
      <div className="rent__box">
        <div className="rent__right">
          <h2 className="rent__header">MEETING ROOM</h2>
          <img src={meeting} className="rent__image" alt="meeting room" />
          <h2 className="rent__header">CULTIVE</h2>
          <img src={cultive} className="rent__image" alt="cultive" />
          <h2 className="rent__header">EQUIPMENT</h2>
          <img src={equipment} className="rent__image" alt="equipment" />
          <h2 className="rent__header">MICROSCOPE</h2>
          <img src={microscope} className="rent__image" alt="microscope" />
        </div>
        <div className="courses__left">
          <div className="courses__wrapper">
            <p className="courses__subtitle">EQUIPMENT AVAILABLE</p>
            <p className="courses__item">3 MEETING ROOMS</p>
            <p className="courses__item">CAPACITY = 18 people per room</p>
            <p className="courses__item">Comfortable chairs</p>
            <p className="courses__item">Projector</p>
            <p className="courses__item">Wifi</p>
            <p className="courses__item">Mini Cafeteria </p>
            <p className="courses__subtitle">COMMUNITY LAB</p>
            <p className="courses__item"> Use of Radioactive Equipment</p>
            <p className="courses__item">Prototyped</p>
            <p className="courses__item">Entrepreneurship Project</p>
            <p className="courses__item">Experimental Trials</p>
            <p className="courses__item">Collaborations</p>
            <p className="courses__item">Investigation and Development </p>
            <p className="courses__subtitle">Lab Services</p>
            <p className="courses__item"> DNA extraction and PCR</p>
            <p className="courses__item">Molecular Identification</p>
            <p className="courses__item">Isolations and Purification</p>
            <p className="courses__item">Production of Microorganisms</p>
            <p className="courses__item">Strains Preservation</p>
            <p className="courses__item">Prepared Culture Media</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RentalPage;
