import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <Link to={`/item/${item.id}`}>Ver Detalle</Link>
    </div>
  );
}

export default Item;
