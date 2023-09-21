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
    <div className='header' >
      <div>
        <h1 className='title'>Your CookingBook</h1>
      </div>
       </div>
       <div className='description'>
       Забудьте о скучных обедах и ужинах – давайте создадим кулинарное приключение, которое будет запоминаться на всю жизнь. Присоединяйтесь к нам и давайте вместе покорять мир вкуса!
       </div>
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
      <div className='Allrecipes'>
      {recipeList?.map((card) => (
        <RecipeCard card={card} />
      ))}
      </div>

    </>
  );
}
