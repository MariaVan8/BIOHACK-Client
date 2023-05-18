import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CourseDetails.scss";
import calendar from "../../assests/logo/calendar1.png";
import laptop from "../../assests/logo/laptop1.png";
import certificate from "../../assests/logo/certificate.png";
import coursesData from "../../data/courses.json";

function CourseDetails() {
  const [course, setCourse] = useState({});

  const params = useParams();

  useEffect(() => {
    const foundCourse = coursesData.find((course) => course.id === params.id);
    setCourse(foundCourse);
  }, [params.id]);

  return (
    <>
      <div className="details__container">
        <div
          className="details__box"
          style={{
            backgroundImage: `url('../${course.image}')`,
          }}
        >
          <h1 className="details__title">{course.title}</h1>
        </div>
        <div className="details__wrapper">
          <img className="details__icon" src={calendar} alt="calendar icon" />
          <p className="details__item">{course.time}</p>
        </div>
        <div className="details__wrapper">
          <img className="details__icon" src={laptop} alt="laptop icon" />
          <p className="details__item">{course.tools}</p>
        </div>
        <div className="details__wrapper">
          <img
            className="details__icon"
            src={certificate}
            alt="certificate icon"
          />
          <p className="details__item">Certificate</p>
        </div>
        <p className="details__desc">Description:</p>
        <h2 className="details__head">{course.extra}</h2>
        <div className="details__container--desc">
          {course.topics
            ? course?.topics.map((item, index) => (
                <p className="details" key={index}>
                  {item}
                </p>
              ))
            : ""}
        </div>
      </div>
    </>
  );
}

export default CourseDetails;
