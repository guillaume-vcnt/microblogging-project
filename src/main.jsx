// Ce fichier sert à monter l'application React sur l'élément root de votre fichier HTML. Il est généralement situé dans le dossier src.

// import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './main.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)


