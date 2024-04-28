import React from "react";
import "./Banner.scss";
import BannerHome from "../../assets/images/banner-home.png";
import BannerAbout from "../../assets/images/banner-about.png";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      {location.pathname === "/" ? (
        <div className="banner-home banner-dark">
          <h2>Chez vous et partout ailleurs</h2>
          <img src={BannerHome} alt="image d'illustration" />
        </div>
      ) : location.pathname === "/about" ? (
        <div className="banner-about">
          <img src={BannerAbout} alt="image d'illustration" />
        </div>
      ) : null}
    </div>
  );
};

export default Banner;
