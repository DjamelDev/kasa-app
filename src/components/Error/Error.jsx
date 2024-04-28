import React from "react";
import "./Error.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
      <p className="back-home">
        <Link to="/">Retourner sur la page d’accueil</Link>
      </p>
    </div>
  );
};

export default Error;
