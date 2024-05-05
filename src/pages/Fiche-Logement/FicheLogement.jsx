import React, { useState } from "react";
import { useParams } from "react-router-dom";
import datas from "../../assets/datas/logements.json";
import Error from "../../components/Error/Error";
import Slideshow from "../../components/Slideshow/Slideshow";
import "./FicheLogement.scss";

const FicheLogement = () => {
  const { id } = useParams(); // On utilise useParams de react-router-dom pour récupérer le paramètre id de l'URL
  console.log(id);
  const getLogement = datas.find((data) => data.id === id); // Recherche les informations qui correspondent à l'identifiant
  const [logement, setLogement] = useState(getLogement);
  return logement ? (
    // Si un logement correspondant est trouvé, les éléments affichent l'identifiant (logement.id) et le titre (logement.title).
    <main>
      <div className="apartment-container">
        <Slideshow logement={logement} />
      </div>
    </main>
  ) : (
    // Sinon, elle affiche un composant <Error/>.
    <Error />
  );
};

export default FicheLogement;
