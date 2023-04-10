import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Courses.scss";

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
        <h1 className="courses__header">Selection of Courses</h1>
      </div>
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
    </>
  );
}

export default Courses;
