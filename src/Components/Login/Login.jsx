import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login({ setSignUpToggle }) {
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const baseUrl = "http://localhost:8080";
  const loginUrl = `${baseUrl}/login`;
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

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
        <Link to="/signup">
          <button onClick={() => setSignUpToggle(true)}>
            I don't have an account
          </button>
        </Link>
      </form>
    </div>
  );
}
export default Login;
