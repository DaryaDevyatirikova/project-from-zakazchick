import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './ui/Navbar';
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import SignUpPage from './pages/SingUpPage';
import LoginPage from './pages/LoginPage';
import FavouritePage from './pages/FavouritePage';

export default function App({ hello }) {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/:recipeId" element={<RecipePage />} />
        <Route path="/favourite" element={<FavouritePage />} />

      </Routes>
    </>
  );
}
