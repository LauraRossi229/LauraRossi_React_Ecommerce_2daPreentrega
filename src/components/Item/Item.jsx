import './Item.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price, stock }) => {
  return (
    <div className='item'>
      <Card bg='light' className='cardItem mb-3'>
        <Card.Header className='Header'>
          <h2 className='itemHeader'>{name}</h2>
        </Card.Header>
        <Card.Img variant='top' src={img} alt={name} className='itemImg' />
        <Card.Body>
          <Card.Text className='cardText'>Precio: ${price}</Card.Text>
          <Card.Text className='cardText'>Stock disponible: {stock}</Card.Text>
          <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
