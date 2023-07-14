import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, name, price, quantity }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemove = () => {
    removeItem(id);
  };

  return (
    <div className="cart-item">
      <Card>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Precio: ${price}</Card.Text>
          <Card.Text>Cantidad: {quantity}</Card.Text>
          <Button variant="danger" onClick={handleRemove}>
            Eliminar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CartItem;

