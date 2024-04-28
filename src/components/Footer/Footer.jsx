import React from "react";
import "./Footer.scss";
import Logo from "../../assets/images/logo-footer.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <img src={Logo} alt="" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
