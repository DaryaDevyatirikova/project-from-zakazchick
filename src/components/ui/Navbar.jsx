import React from 'react';

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
        <a className="nav-link" href="#">
          Войти
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Зарегистрироваться
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Выйти
        </a>
      </li>
    </ul>
  );
}
