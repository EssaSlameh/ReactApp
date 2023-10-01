import React, { useState } from 'react';
import './BlurryCard.css'; // Create this CSS file for styling

const BlurryCard = ({ message }) => {
  const [showCard, setShowCard] = useState(true);

  const closeCard = () => {
    setShowCard(false);
  };

  return (
    showCard && (
      <div className="blurry-card">
        <div className="blurry-card-content">
          <span className="close-button" onClick={closeCard}>
            &times;
          </span>
          <p>{message}</p>
        </div>
      </div>
    )
  );
};

export default BlurryCard;
