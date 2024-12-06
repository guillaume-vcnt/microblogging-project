import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import BipBip from '../assets/pictures/BipBip.png';

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>Login</li>
        </NavLink>
        <NavLink to="/userprofil">
          <li>
            <button>User Profil</button>
          </li>
        </NavLink>
        <NavLink to="/wall">
          <li>Wall</li>
        </NavLink>
      </ul>
    </div>
  );
};

const UserProfileLink = () => {
  return (
    <NavLink to="/userprofil">
      <div className="user-profil-div">
        <button className="user-profil-button">
        <img src={BipBip} alt="Profile" />
        </button>
      </div>
    </NavLink>
  );
};

export { Navigation, UserProfileLink };
