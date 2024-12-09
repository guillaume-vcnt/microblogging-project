// Le fichier App.jsx définit la structure de la page et contient les composants principaux de ton application. Tu peux également y importer des styles spécifiques en utilisant un fichier comme App.css.

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import UserProfil from "./pages/UserProfil";
import Wall from "./pages/Wall";
import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userprofil" element={<UserProfil />} />
        <Route path="/wall" element={<Wall />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
