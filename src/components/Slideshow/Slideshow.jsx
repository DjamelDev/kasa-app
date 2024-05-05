import React, { useState } from "react";
import "./Slideshow.scss";
import leftChevron from "../../assets/images/array-left.png";
import rightChevron from "../../assets/images/array-right.png";

const Slideshow = ({ logement }) => {
  const [index, setIndex] = useState(0); // Initialiser à 0

  function toggleImage(indexPayload) {
    let newIndex = index + indexPayload;
    if (newIndex >= logement.pictures.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = logement.pictures.length - 1;
    }
    setIndex(newIndex);
  }

  return (
    <div className="apartment-banner">
      <img src={logement.pictures[index]} alt="aie" className="slider" />
      {logement.pictures.length > 1 && (
        <>
          <button
            className="navigation-button prev-button"
            onClick={() => toggleImage(-1)}
          >
            <img
              src={leftChevron}
              alt="image précédente"
              className="left-chevron"
            />
          </button>
          <button
            className="navigation-button next-button"
            onClick={() => toggleImage(+1)}
          >
            <img
              src={rightChevron}
              alt="image suivante"
              className="right-chevron"
            />
          </button>
          <p className="index-info">
            {index + 1}/{logement.pictures.length}
          </p>
        </>
      )}
    </div>
  );
};

export default Slideshow;
