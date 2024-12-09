import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import "./loginForm.css";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/login/`,
      withCredentials: true,
      data: {
        email,
        password,
      }
    });
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/wall");
  };

  return (
    <div className="wrapper">
      <form action="" onSubmit={handleLogin} id="sign-in-Form">
        <h1>Hello there !</h1>
        <div className="input-box">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <FaUserAlt className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <FaLock className="icon" />
        </div>
        <button onClick={handleClick} type="submit" value="Se connecter">
          Login
        </button>

        <div className="register-link">
          <br></br>
          <hr></hr>
          <br></br>
          <p>
            Don't have an account? <a href="#">Register here</a>
          </p>
          <br></br>
          <p>
            Forgot password? <a href="#">Reset here</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
