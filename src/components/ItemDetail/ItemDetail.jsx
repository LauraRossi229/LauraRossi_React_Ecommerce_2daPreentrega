import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price
    };

    addItem(item, quantity);
  };

  return (
    <div className='item'>
     
      <Card bg='light' className='cardItemDetail mb-3'>
        <Card.Header className='Header'>
     
          <h2 className='itemHeader'>{name}</h2>
        </Card.Header>

        <Card.Img variant='top' src={img} alt={name} />

        <Card.Body>
        
          <Card.Text className='cardText'>Categoria: {category}</Card.Text>
          <Card.Text className='cardText'>Descripción: {description}</Card.Text>
          <Card.Text className='cardText'>Precio: ${price}</Card.Text>
          <Card.Text className='cardText'>Cupos disponibles: {stock}</Card.Text>
       

          <div className='d-flex justify-content-center'>
            {quantityAdded > 0 ? (
              <Link to='/cart' className='btn btn-primary'>Terminar Compra</Link>
            ) : (
              <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
            )}
          </div>
        </Card.Body>
        {stock === 0 && (
          <Card.Footer className='text-center bg-danger'>
              <span className='text-white fs-8'>Agotado</span>
          </Card.Footer>
          )}
      </Card>
    </div>
  );
};

export default ItemDetail;
