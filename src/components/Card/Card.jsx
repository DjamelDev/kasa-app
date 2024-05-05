import React from "react";
import "./Card.scss";
import datas from "../../assets/datas/logements.json";
import { Link } from "react-router-dom";
import FicheLogement from "../../pages/Fiche-Logement/FicheLogement";

const Card = () => {
  return (
    <div className="container-card">
      <div className="card-flex">
        {datas.map((logement) => (
          <Link to={`/fiche-logement/${logement.id}`} key={logement.id}>
            <div className="card">
              <img
                src={logement.cover}
                alt="illustration du logement"
                title={logement.title}
              />
              <p>{logement.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
