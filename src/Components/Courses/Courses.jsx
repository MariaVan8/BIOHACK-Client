import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Courses.scss";
import arrow from "../../assests/logo/arrow.png";

const api = "http://localhost:8080";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`${api}/courses`)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  return (
    <>
      <div className="courses__section">
        <Link to={"/"} className="courses__link">
          <img className="courses__arrow" src={arrow} alt="" />
        </Link>

        <h1 className="courses__header">Selection of Courses</h1>
      </div>
      <div className="courses__big-container">
        <div className="courses__wrapper">
          {courses.map((course) => (
            <Link
              to={`/details/${course.id}`}
              className="courses__box"
              key={course.id}
              style={{
                backgroundImage: `url(${course.image})`,
              }}
            >
              <p className="courses__title"> {course.title}</p>
              <p className="courses__time">{course.time}</p>
            </Link>
          ))}
        </div>
        <div className="courses__right">
          <div className="course__wrapper">
            <p className="course__subtitle">Available Technology</p>
            <p className="course__item">-Molecular Biology</p>
            <p className="course__item">-Microbiology</p>
            <p className="course__item">-Natural Extracts</p>
            <p className="course__item">-Sterile Area</p>
            <p className="course__item">-Agroindustry</p>
            <p className="course__item">-Microscopy</p>
            <p className="course__item">-Biomaterials</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
