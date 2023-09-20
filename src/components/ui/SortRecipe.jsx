import React from 'react';

export default function SortRecipe() {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Выбрать категорию
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Количеству ингредиентов
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Времени готовки
          </a>
        </li>
      </ul>
    </div>
  );
}
