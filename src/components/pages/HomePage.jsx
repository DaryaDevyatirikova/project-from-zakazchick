import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SortRecipe from '../ui/SortRecipe';
import SortDESC from '../ui/icons/SortDESC';
import SortABS from '../ui/icons/SortABS';
import RecipeCard from '../ui/RecipeCard';

export default function HomePage() {
  const [recipeList, setRecipeList] = useState(null);
  
  useEffect(() => {
    axios('/api').then(({data}) => setRecipeList(data));
  }, []);

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
        <RecipeCard card={card} />
      ))}
    </>
  );
}
