// Le fichier App.jsx définit la structure de la page et contient les composants principaux de ton application. Tu peux également y importer des styles spécifiques en utilisant un fichier comme App.css.

import React from "react";
import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import UserProfil from "./pages/UserProfil";
import Wall from "./pages/Wall";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Bonjour React !</h1>
    </div>
  );
}

export default App;
