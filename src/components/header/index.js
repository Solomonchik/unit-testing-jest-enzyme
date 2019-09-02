import React from "react";
import XPlanet from "../../img/xplanet.png";

const Header = props => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoImg" src={XPlanet} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
