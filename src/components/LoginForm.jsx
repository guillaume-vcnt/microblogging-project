import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import React from "react";
import "./loginForm.css";

const FormLogin = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/wall");
  };

  return (
    <div className="wrapper">
      <form action="">
        <h1>Hello there !</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUserAlt className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>
        <button onClick={handleClick} type="submit">
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

export default FormLogin;
