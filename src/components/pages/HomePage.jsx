import React from 'react';
import SortRecipe from '../ui/SortRecipe';
import SortDESC from '../ui/icons/SortDESC';
import SortABS from '../ui/icons/SortABS';
import Like from '../ui/icons/Like';

export default function HomePage({recipeList}) {
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
      {recipeList?.map((card) => (
        <div className="card" style={{ width: '18rem' }}>
          <img src={card.image} className="card-img-top" alt="..." />
          <div>
            <Like />
          </div>
          <div className="card-body">
            <h5 className="card-title">{card.recipename}</h5>
            <p className="card-text">{card.description}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
