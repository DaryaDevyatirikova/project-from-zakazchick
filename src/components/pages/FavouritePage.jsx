import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SortRecipe from '../ui/SortRecipe';
import SortABS from '../ui/icons/SortABS';
import SortDESC from '../ui/icons/SortDESC';
import FavRecipe from '../ui/FavRecipe';

export default function FavouritePage() {
  const [favouriteList, setFavouriteList] = useState(null);
  const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    axios('/api/favourite').then(({ data }) => setFavouriteList(data));
  }, [deleted]);

  const clickHandler = async () => {
    setFavouriteList((prev) => [...prev.reverse()]);
  };
  const sortHandler = async (e) => {
    if (e.target.value === '1') {
      setFavouriteList((prev) => [...prev.sort((a, b) => a.time - b.time)]);
    }
    if (e.target.value === '2') {
      for (let i = 0; i < favouriteList.length; i += 1) {
        const response = await axios(`/api/count/${recipeList[i].id}`);
        favouriteList[i].ingredients = response.data;
      }

      setFavouriteList((prev) => [...prev.sort((a, b) => a.ingredients - b.ingredients)]);
    }
  };
  return (
    <>
      <div className="hstack gap-3">
        <div className="p-2">
          Сортировка по:
          <SortRecipe sortHandler={sortHandler}/>
        </div>
        <div className="p-2 ms-auto">
          <button type="button">
            <SortABS clickHandler={clickHandler}/>
          </button>
        </div>
        <div className="vr" />
        <div className="p-2">
          <button type="button">
            <SortDESC clickHandler={clickHandler}/>
          </button>
        </div>
      </div>
      {favouriteList?.map((card) => (
        <FavRecipe
          card={card?.Recipe}
          setFavouriteList={setFavouriteList}
          setDeleted={setDeleted}
        />
      ))}
    </>
  );
}
