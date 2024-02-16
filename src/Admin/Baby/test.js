import React from 'react';
import '../Baby/test'; // Import CSS file for styling

const SquareContainer = ({ title, description }) => {
  return (
    <div className="square-container">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
};

export default SquareContainer;