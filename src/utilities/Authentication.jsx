import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";


const Authentication = () => {
  const apiUrl = String(import.meta.env.VITE_API_URL);

  const [email, setEmail] = useState("georgesClooney@test.com");
  const [password, setPassword] = useState("whatelse1");

  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  
  useEffect(() => {
    localStorage.setItem("coucou", "allo")
    console.log(localStorage)
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/wall");
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault(); //evite les recharges du form
    try {
      const response = await axios({
        method: "post",
        mode: "no-cors",
        url: `${apiUrl}api/login/`,
        data: { email, password },
        withCredentials: false,
      });

      console.log("😆", response);

      if (response.data.errors) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ...response.data.errors,
        }));
      } else {
        localStorage.setItem("token", response.data.token);
        navigate("/wall");
        setMessage("Connexion réussie !");
      }
    } catch (error) {
      console.error("Erreur de connexion :", error);
      setMessage(`Erreur : ${error.message}`);
    }
  };

  return (
    <React.Fragment>
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        errors={errors}
      />
      {message && <p>{message}</p>}
    </React.Fragment>
  );
};
//Evite les noeuds html

export default Authentication;
