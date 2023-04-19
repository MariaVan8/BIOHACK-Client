import React from "react";
import { useParams } from "react-router-dom";
import "./CourseDetails.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import calendar from "../../assests/logo/calendar1.png";
import laptop from "../../assests/logo/laptop1.png";
import certificate from "../../assests/logo/certificate.png";

const api = process.env.REACT_APP_SOME_VARIABLE;

function CourseDetails() {
  // const [courses, setCourses] = useState([]);

  const [course, setCourse] = useState({});

  const params = useParams();

  useEffect(() => {
    axios
      .get(`${api}/courses`)
      .then((response) => {
        console.log("test", response);
        const foundCourse = response.data.find(
          (course) => course.id === params.id
        );
        setCourse(foundCourse);
        console.log(foundCourse);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

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
          <img className="details__icon" src={calendar} />
          <p className="details__item">{course.time}</p>
        </div>
        <div className="details__wrapper">
          <img className="details__icon" src={laptop} />
          <p className="details__item">{course.tools}</p>
        </div>
        <div className="details__wrapper">
          <img className="details__icon" src={certificate} />
          <p className="details__item">Certificate</p>
        </div>
        <p className="details__desc">Description:</p>
        <h2 className="details__head">{course.extra}</h2>
        <div className="details__container--desc">
          {course.topics
            ? course?.topics.map((item, index) => (
                <p className="details" key={index}>
                  - {item}
                </p>
              ))
            : ""}
        </div>
      </div>
    </>
  );
}

export default CourseDetails;
