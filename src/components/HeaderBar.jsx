import React from "react";
import { UserProfileLink } from "./Navigation"; 
import SearchBar from "./SearchBar";
import TitreHeader from "./TitreHeader";
import "./HeaderBar.css";

const HeaderBar = () => {
  return (
    <div className="header-bar">
      <TitreHeader />
      <SearchBar />
      <UserProfileLink  />
    </div>
  );
};

export default HeaderBar;
