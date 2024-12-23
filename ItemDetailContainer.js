import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Simular llamada asincrónica a una API o base de datos
      const allItems = [
        { id: 1, name: 'Producto 1', description: 'Descripción del Producto 1', category: 'electronics' },
        { id: 2, name: 'Producto 2', description: 'Descripción del Producto 2', category: 'clothing' },
        // Agregar más productos según sea necesario
      ];
      const foundItem = allItems.find(item => item.id === parseInt(itemId));
      setTimeout(() => setItem(foundItem), 1000);
    };
    fetchData();
  }, [itemId]);

  return (
    <div>
      {item ? (
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p>Categoría: {item.category}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
