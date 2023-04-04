import "./Courses.scss";
import coursesData from "../../courses.json";

function Courses() {
  const courseTitles = coursesData.courses.map((course) => {
    return {
      title: course.title,
      image: course.image,
      id: course.id,
    };
  });

  return (
    <>
      <div className="courses__section">
        <h1 className="courses__header">Selection of Courses</h1>
      </div>
      <div className="courses__wrapper">
        {courseTitles.map((course) => (
          <div
            className="courses__box"
            key={course.id}
            style={{
              backgroundImage: `url(${course.image})`,
            }}
          >
            <p className="courses__title"> {course.title}</p>
            x
          </div>
        ))}
      </div>
    </>
  );
}
export default Courses;
