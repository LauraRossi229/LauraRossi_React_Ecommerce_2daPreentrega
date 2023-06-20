import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './ItemCount.scss';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='Counter'>
      <div className='Controls'>
        <Button variant='primary' className='ml-5' onClick={decrement}>
          -
        </Button>
        <h4 className='Number'>{quantity}</h4>
        <Button variant='primary' className='ml-5' onClick={increment}>
          +
        </Button>
      </div>
      <div>
        <Button className='Boton' onClick={() => onAdd(quantity)} disabled={!stock}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
