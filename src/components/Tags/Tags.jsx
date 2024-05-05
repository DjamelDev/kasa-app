import React from "react";
import "./Tags.scss";

const Tags = ({ logement }) => {
  console.log(logement);
  return (
    <div className="tags-container">
      <div className="tag">
        <ul>
          {logement.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tags;
