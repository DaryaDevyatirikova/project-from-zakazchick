import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Delete from './icons/Delete';
import Like from './icons/Like';

export default function FavRecipe({ card, setDeleted }) {
 
 
  const clickHandler = async () => {
    await axios.delete(`/api/${card.id}`);
    setDeleted((prev) => !prev);
  };
  return (
    <>
    {/* <div key={card?.id} className="card" style={{ width: '18rem' }}>
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
    </div> */}

        <article className='newCard'>
     
        <div className="article-wrapper">
          <figure>
            <img src={card.image} alt="" />
          </figure>
          <div className="article-body">
            <h2>{card.recipename}</h2>
            <p>
            {card.description}
            <br />
            {`Время готовки:${card.time}`}
            </p>
        <div>
        <Delete cardId={card.id} clickHandler={clickHandler} />
      </div>
            <a href={`/rec/${card.id}`} className="read-more">
              Узнать больше <span className="sr-only">about this is some title</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </article>
      </>
  );
}
