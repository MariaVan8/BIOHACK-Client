import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Login/Login.scss";

function Login({ setSignUpToggle }) {
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const loginUrl = `${baseUrl}/login`;
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("HELLO", e);
    axios
      .post(loginUrl, {
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((response) => {
        sessionStorage.setItem("JWTtoken", response.data.token);

        setIsLoginError(false);
        setErrorMessage("");

        navigate("/profile");
      })
      .catch((error) => {
        setIsLoginError(true);
        setErrorMessage(error.response.data.error.message);
      });
  };

  return (
    <div className="form__container">
      <div className="form__wrapper">
        <h1 className="form__title">Login</h1>
        {isLoginError && <label style={{ color: "red" }}>{errorMessage}</label>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            Username: <input type="text" name="username" />
          </div>
          <div className="form-group">
            Password: <input type="password" name="password" />
          </div>
          <button className="btn__login" type="submit">
            Login
          </button>
          <Link to="/signup">
            <button
              onClick={() => setSignUpToggle(true)}
              className="btn__account"
            >
              I don't have an account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Login;
