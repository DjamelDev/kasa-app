import React from "react";
import "./Header.scss";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo Kasa" />
      </div>
    </header>
  );
};

export default Header;
