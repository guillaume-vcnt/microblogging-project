import { useNavigate } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import "./loginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const apiUrl = String(import.meta.env.VITE_API_URL);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/wall");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const emailError = document.querySelector(".email-error");
    const passwordError = document.querySelector(".password-error");

    axios({
      method: "post",
      url: `${apiUrl}api/login/`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="wrapper">
      <form action="" onSubmit={handleLogin} id="sign-in-Form">
        <h1>Hello there !</h1>
        <div className="input-box">
          <input
            type="text"
            className="email-error"
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
            className="password-error"
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
