// Le fichier main.jsx a pour fonction principale de monter l'application React sur l'élément avec l'ID "root" dans ton fichier HTML. En le liant ainsi, tu permets à ton application React de s'intégrer dans la structure du DOM. Cela assure que tout le contenu et les composants définis dans App.jsx seront rendus à l'intérieur de cet élément HTML spécifique.

import React from "react";
import App from "./App.jsx";
import "./App.css"
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
