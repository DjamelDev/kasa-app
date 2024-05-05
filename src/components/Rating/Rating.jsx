import React from "react";
import "./Rating.scss";
import StarActive from "../../assets/images/star-active.png";
import StarInactive from "../../assets/images/star-inactive.png";

const Rating = ({ logement }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(i < logement.rating ? StarActive : StarInactive);
  }

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <img src={star} key={index} alt="" />
      ))}
    </div>
  );
};

export default Rating;
