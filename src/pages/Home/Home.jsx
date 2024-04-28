import React from "react";
import "./Home.scss";
import { useLocation } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";

const Home = () => {
  const location = useLocation();
  // Définir la classe conditionnellement en fonction de la page
  const headerClass = location.pathname === "/" ? "nav-active" : "";
  return (
    <div>
      <Banner />
      <Card />
    </div>
  );
};

export default Home;
