import React from "react";
import HeaderBar from "../components/HeaderBar";
import FooterBar from "../components/FooterBar";

const Wall = () => {
  return (
    <React.Fragment>
      <div className="Wall">
        <HeaderBar />
      </div>
      <div className="foot-bar-wall">
        <FooterBar />
      </div>
    </React.Fragment>
  );
};

export default Wall;
