import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Courses.scss";
import arrow from "../../assests/logo/arrow.png";
import coursesData from "../../data/courses.json";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(coursesData);
  }, []);

  return (
    <>
      <div className="courses__section">
        <Link to={"/"} className="courses__link">
          <img className="courses__arrow" src={arrow} alt="" />
        </Link>
        <h1 className="courses__head">Selection of Courses</h1>
      </div>
      <div className="courses__contain">
        <div className="courses__wrap">
          {courses.map((course) => (
            <Link
              to={`/details/${course.id}`}
              className="courses__box"
              key={course.id}
              style={{
                backgroundImage: `url(${course.image})`,
              }}
            >
              <p className="courses__title">{course.title}</p>
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
