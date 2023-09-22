import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SortRecipe from '../ui/SortRecipe';
import SortABS from '../ui/icons/SortABS';
import SortDESC from '../ui/icons/SortDESC';
import FavRecipe from '../ui/FavRecipe';

export default function FavouritePage() {
  const [favouriteList, setFavouriteList] = useState(null);
  const [deleted, setDeleted] = useState(false);
  useEffect(()=>{
    axios('/api/favourite').then(({ data }) => setFavouriteList(data));
  },[deleted])

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
        <FavRecipe card={card?.Recipe} setFavouriteList={setFavouriteList} setDeleted={setDeleted}/>
      ))}
    </>
  );
}
