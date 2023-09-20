import React from 'react';
import SortRecipe from '../ui/SortRecipe';
import SortABS from '../ui/icons/SortABS';
import SortDESC from '../ui/icons/SortDESC';
import Like from '../ui/icons/Like';

export default function FavouritePage({ favouriteList }) {
  return (
    <>
      <div className="hstack gap-3">
        <div className="p-2">
          Сортировка по:
          <SortRecipe />
        </div>
        <div className="p-2 ms-auto">
          <button type="button">
            <SortABS />
          </button>
        </div>
        <div className="vr" />
        <div className="p-2">
          <button type="button">
            <SortDESC />
          </button>
        </div>
      </div>
      {favouriteList?.map((card) => (
        <div className="card" style={{ width: '18rem' }}>
          <img src={card.Recipe.image} className="card-img-top" alt="..." />
          <div>
            <Like />
          </div>
          <div className="card-body">
            <h5 className="card-title">{card.Recipe.recipename}</h5>
            <p className="card-text">{card.Recipe.description}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
