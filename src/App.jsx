import { useState } from "react";
import Profile from "./pages/ProfilePage/Profile.jsx";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header";
import ServicePage from "./pages/ServicePage/ServicePage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseDetails from "./Components/CourseDetails/CourseDetails.jsx";
import Courses from "./Components/Courses/Courses.jsx";
import WelcomePage from "./pages/WelcomePage/WelcomePage.jsx";
import Login from "./Components/Login/Login.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import RentalPage from "./pages/RentalPage/RentalPage.jsx";
import Thesis from "./pages/Thesis/Thesis.jsx";

function App() {
  // const [isSignedUp, setIsSignedUp] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isLoginError, setIsLoginError] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");

  // const handleSignup = (e) => {
  //   e.preventDefault();

  //   axios
  //     .post(signupUrl, {
  //       username: e.target.username.value,
  //       name: e.target.name.value,
  //       password: e.target.password.value,
  //     })
  //     .then(() => {
  //       setIsSignedUp(true);
  //     });
  // };

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   axios
  //     .post(loginUrl, {
  //       username: e.target.username.value,
  //       password: e.target.password.value,
  //     })
  //     .then((response) => {
  //       sessionStorage.setItem("JWTtoken", response.data.token);

  //       setIsLoggedIn(true);
  //       setIsLoginError(false);
  //       setErrorMessage("");
  //     })
  //     .catch((error) => {
  //       setIsLoginError(true);
  //       setErrorMessage(error.response.data.error.message);
  //     });
  // };

  // const renderSignUp = () => (
  //   <div>
  //     <h1>Sign Up</h1>
  //     <form onSubmit={handleSignup}>
  //       <div className="form-group">
  //         Username: <input type="text" name="username" />
  //       </div>
  //       <div className="form-group">
  //         Name: <input type="text" name="name" />
  //       </div>
  //       <div className="form-group">
  //         Password: <input type="password" name="password" />
  //       </div>
  //       <button className="btn btn-primary" type="submit">
  //         Signup
  //       </button>
  //     </form>
  //   </div>
  // );

  // const renderLogin = () => (
  //   <div>
  //     <h1>Login</h1>
  //     {isLoginError && <label style={{ color: "red" }}>{errorMessage}</label>}
  //     <form onSubmit={handleLogin}>
  //       <div className="form-group">
  //         Username: <input type="text" name="username" />
  //       </div>
  //       <div className="form-group">
  //         Password: <input type="password" name="password" />
  //       </div>
  //       <button className="btn btn-primary" type="submit">
  //         Login
  //       </button>
  //     </form>
  //   </div>
  // );

  // Handle the Signup/Login
  // if (!isSignedUp) return renderSignUp();
  // if (!isLoggedIn) return renderLogin();

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/rental" element={<RentalPage />}></Route>
          <Route path="/thesis" element={<Thesis />}></Route>
          <Route path="/services" element={<ServicePage />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/details/:id" element={<CourseDetails />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
