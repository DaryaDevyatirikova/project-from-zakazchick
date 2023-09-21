import React from 'react';
import SortRecipe from '../ui/SortRecipe';
import SortABS from '../ui/icons/SortABS';
import SortDESC from '../ui/icons/SortDESC';
import RecipeCard from '../ui/RecipeCard';

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
        <RecipeCard card={card?.Recipe} />
      ))}
    </>
  );
}
