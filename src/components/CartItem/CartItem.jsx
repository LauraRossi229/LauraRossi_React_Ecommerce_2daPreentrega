import React, { useContext, useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { CartContext } from "../../context/CartContext";
import "./CartItem.scss";

const CartItem = ({ id, name, img, price, quantity }) => {
  const { removeItem, updateQuantity } = useContext(CartContext);
  const [newQuantity, setNewQuantity] = useState(quantity);

  const handleRemove = () => {
    removeItem(id);
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    setNewQuantity(value);
    updateQuantity(id, value);
  };

  return (
    <div className="cart-item">
      <Card className='cart-item-container'>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className='fontCartItem'>Precio: ${price}</Card.Text>
          <Card.Text className='fontCartItem'>Cantidad:
            <Form.Control
              type="number"
              min="1"
              value={newQuantity}
              onChange={handleQuantityChange}
              className="custom-form-control"
            />
          </Card.Text>
          <Button variant="info" onClick={handleRemove}>
            Eliminar Curso
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CartItem;
