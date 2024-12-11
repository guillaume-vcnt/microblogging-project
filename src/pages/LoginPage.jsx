import React from "react";
import Titre from "../components/Titre";
import "./LoginPage.css";
import Authentication from "../utilities/Authentication";

const LoginPage = () => {

  return (
    <div className="Login-page">
      <Titre />
      <Authentication />
    </div>
  );
};

export default LoginPage;
