import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
    // Définir la classe conditionnellement en fonction de la page
    const headerClass = location.pathname === '/' ? 'nav-active' : '';
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
