import React from "react";
import "./Card.scss";
import datas from "../../assets/datas/logements.json";

const Card = () => {
  return (
    <div className="container-card">
      <div className="card-flex">
        {datas.map((logement, index) => (
          <div className="card" key={index}>
            <img
              src={logement.cover}
              alt="illustration du logement"
              title={logement.title}
            />
            <p>{logement.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
