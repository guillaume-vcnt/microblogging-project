import React from "react";
import LoginForm from "../components/LoginForm";
import Titre from "../components/Titre";
import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <Titre />
      <LoginForm />
    </div>
  );
};

export default Login;
