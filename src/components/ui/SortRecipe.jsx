import React from 'react';
import { Form } from 'react-bootstrap';

export default function SortRecipe({ sortHandler }) {
  return (
    <Form.Select onClick={sortHandler} aria-label="Default select example">
      <option>Категория</option>
      <option value="1">По времени</option>
      <option value="2">По количеству ингредиентов</option>
    </Form.Select>
  );
}
