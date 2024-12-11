import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/login" ClassName="active-link">
          <li>Login</li>
        </NavLink>
        <NavLink to="/userprofil" ClassName="active-link">
          <li>
            <button>User Profil</button>
          </li>
        </NavLink>
        <NavLink to="/wall" ClassName="active-link">
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
          <FaUserLarge className="user-profil-icon" />
        </button>
      </div>
    </NavLink>
  );
};

export { Navigation, UserProfileLink };
