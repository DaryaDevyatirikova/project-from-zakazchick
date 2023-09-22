import React, { useState } from 'react';
import Like from './icons/Like';

export default function RecipeCard({ card, user }) {
  
    return (
    <div key={card.url} className="card" style={{ width: '18rem' }}>
      <img src={card.image} className="card-img-top" alt="..." />
      {user && (
        <div>
          <Like cardId={card.id} card={card} />
        </div>
      )}
      
      <div className="card-body">
        <h5 className="card-title">{card.recipename}</h5>
        <p className="card-text">{card.description}</p>
        <a href={`/${card.id}`} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
