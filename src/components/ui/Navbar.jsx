import React from 'react';
import axios from 'axios';

export default function Navbar() {
  return (
    <ul className="nav nav-underline">
      <li className="nav-item">Кулинарная книга</li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Избранное
        </a>
      </li>
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
    </ul>
  );
}
