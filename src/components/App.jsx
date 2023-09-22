import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './ui/Navbar';
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import SignUpPage from './pages/SingUpPage';
import LoginPage from './pages/LoginPage';
import FavouritePage from './pages/FavouritePage';
import NewNavbar from './ui/NewNavBar';



export default function App({ recipeList,favouriteList, user, recipeCard }) {
  return (
    <>
      <NewNavbar user = {user}/>

      <Routes>
        <Route path="/" element={<HomePage recipeList={recipeList} user={user} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/rec/:recipeId" element={<RecipePage  recipe={recipeCard} />} />
        <Route path="/favourite" element={<FavouritePage favouriteList={favouriteList} user={user} />} />
      </Routes>
    </>
  );
}
