import React, { useState } from "react";
import { useParams } from "react-router-dom";
import datas from "../../assets/datas/logements.json";
import Error from "../../components/Error/Error";
import Slideshow from "../../components/Slideshow/Slideshow";
import "./FicheLogement.scss";
import Tags from "../../components/Tags/Tags";

const FicheLogement = () => {
  const { id } = useParams(); // On utilise useParams de react-router-dom pour récupérer le paramètre id de l'URL
  const getLogement = datas.find((data) => data.id === id); // Recherche les informations qui correspondent à l'identifiant
  const [logement, setLogement] = useState(getLogement);
  console.log(logement);
  return logement ? (
    // Si un logement correspondant est trouvé, les éléments affichent l'identifiant (logement.id) et le titre (logement.title).
    <main>
      <div className="apartment-container">
        <Slideshow logement={logement} />
        <div className="apartment-description">
          <div className="left">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <Tags logement={logement} />
          </div>
          <div className="right">
            <div className="host">
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  ) : (
    // Sinon, elle affiche un composant <Error/>.
    <Error />
  );
};

export default FicheLogement;
