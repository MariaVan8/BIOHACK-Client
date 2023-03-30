import { useState } from "react";
import Profile from "./pages/ProfilePage/Profile.jsx";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero.jsx";
import ServicePage from "./pages/ServicePage/ServicePage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const baseUrl = "http://localhost:8080";
const loginUrl = `${baseUrl}/login`;
const signupUrl = `${baseUrl}/signup`;

function App() {
  const [isSignedUp, setIsSignedUp] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    axios
      .post(signupUrl, {
        username: e.target.username.value,
        name: e.target.name.value,
        password: e.target.password.value,
      })
      .then(() => {
        setIsSignedUp(true);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post(loginUrl, {
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((response) => {
        sessionStorage.setItem("JWTtoken", response.data.token);

        setIsLoggedIn(true);
        setIsLoginError(false);
        setErrorMessage("");
      })
      .catch((error) => {
        setIsLoginError(true);
        setErrorMessage(error.response.data.error.message);
      });
  };

  const renderSignUp = () => (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          Username: <input type="text" name="username" />
        </div>
        <div className="form-group">
          Name: <input type="text" name="name" />
        </div>
        <div className="form-group">
          Password: <input type="password" name="password" />
        </div>
        <button className="btn btn-primary" type="submit">
          Signup
        </button>
      </form>
    </div>
  );

  const renderLogin = () => (
    <div>
      <h1>Login</h1>
      {isLoginError && <label style={{ color: "red" }}>{errorMessage}</label>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          Username: <input type="text" name="username" />
        </div>
        <div className="form-group">
          Password: <input type="password" name="password" />
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );

  // Handle the Signup/Login
  if (!isSignedUp) return renderSignUp();
  if (!isLoggedIn) return renderLogin();

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Hero />
        <Routes>
          <Route path="/services" element={<ServicePage />}></Route>
        </Routes>
        <Profile />
      </BrowserRouter>
    </div>
  );
}

export default App;
