import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Simular llamada asincrónica a una API o base de datos
      const allItems = [
        { id: 1, name: 'Producto 1', category: 'electronics' },
        { id: 2, name: 'Producto 2', category: 'clothing' },
        // Agregar más productos según sea necesario
      ];
      const filteredItems = categoryId ? allItems.filter(item => item.category === categoryId) : allItems;
      setTimeout(() => setItems(filteredItems), 1000);
    };
    fetchData();
  }, [categoryId]);

  return (
    <div>
      <h1>{categoryId ? `Categoría: ${categoryId}` : 'Catálogo de Productos'}</h1>
      <div>
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
