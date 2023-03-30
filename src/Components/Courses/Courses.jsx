import "./Courses.scss";

function Courses() {
  // const courseList = document.querySelector(".courses__list");

  // function displayCourses(course) {
  //     console.log(courseList);

  //     const courseItem = document.createElement("li");
  //     courseItem.classList.add("course__item");

  //     const courseBox = document.createElement("div");
  //     courseBox.classList.add("course__info");

  //     const courseDate = document.createElement("p");
  //     courseDate.innerText = "Date";
  //     courseDate.classList.add("schedule__main");

  return (
    <>
      <div className="courses__section">
        <h1 className="courses__title">Courses</h1>
        <div className="courses"></div>
        <ul className="courses__list"></ul>
      </div>
    </>
  );
}

export default Courses;
