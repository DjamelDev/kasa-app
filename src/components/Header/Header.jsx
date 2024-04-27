import React from "react";
import "./Header.scss";
import Logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo Kasa" />
      </div>
      <nav>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          A Propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
