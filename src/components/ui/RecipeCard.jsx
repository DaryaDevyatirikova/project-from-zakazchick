import axios from 'axios';
import React from 'react';
import Like from './icons/Like';

export default function RecipeCard({ card }) {
  return (
    <div key={card.url} className="card" >
      <img className='foodimg' src={card.image} className="card-img-top" alt="..." />
      <div className='like'>
        <Like cardId={card.id} card={card} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{card.recipename}</h5>
        <p className="card-text">{card.description}</p>
        <a href={`/rec/${card.id}`} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
