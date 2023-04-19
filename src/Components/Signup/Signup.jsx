import React from "react";
import { useState } from "react";
import axios from "axios";
import "../Signup/Signup.scss";

function Signup({ setSignUpToggle }) {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const signupUrl = `${baseUrl}/signup`;

  const handleSignup = (e) => {
    e.preventDefault();

    axios
      .post(signupUrl, {
        username: e.target.username.value,
        name: e.target.name.value,
        password: e.target.password.value,
      })
      .then(() => {
        alert("You created your account!");
        setSignUpToggle(false);
      });
  };

  return (
    <div className="form__container">
      <div className="form__wrapper">
        <h1 className="form__title">Sign Up</h1>
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
    </div>
  );
}

export default Signup;
