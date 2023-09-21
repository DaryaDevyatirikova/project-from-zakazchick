import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Navbar({ user }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <ul className="nav nav-underline">
      <li className="nav-item">
        <a className="nav-link" href="/">
          Кулинарная книга
        </a>
      </li>
      {user && (
        <>
          <li className="nav-item">
            <a className="nav-link" href="/favourite">
              Избранное
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/logout"
              onClick={(e) => {
                e.preventDefault();
                axios('/api/auth/logout')
                  .then(() => (window.location.href = '/'))
                  .catch(console.log);
              }}
            >
              Выйти
            </a>
          </li>
        </>
      )}
      {!user && (
        <>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Войти
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/signup">
              Зарегистрироваться
            </a>
          </li>
        </>
      )}
    </ul>
  );
}
