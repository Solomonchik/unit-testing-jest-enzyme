import React from "react";
import XPlanet from "../../img/xplanet.png";

const Header = props => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={XPlanet} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
