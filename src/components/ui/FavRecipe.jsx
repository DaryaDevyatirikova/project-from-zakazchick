import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Delete from './icons/Delete';

export default function FavRecipe({ card, setDeleted }) {
 
 
  const clickHandler = async () => {
    await axios.delete(`/api/${card.id}`);
    setDeleted((prev) => !prev);
  };
  return (
    <div key={card?.id} className="card" style={{ width: '18rem' }}>
      <img src={card.image} className="card-img-top" alt="..." />

      <div>
        <Delete cardId={card.id} clickHandler={clickHandler} />
      </div>

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
