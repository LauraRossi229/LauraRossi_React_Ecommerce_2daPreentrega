import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    return (
        <div className='item'>
        <Card  bg='light' className='cardItemDetail mb-3'>
            <Card.Header className='Header'>
            <h2 className=' itemHeader'>
                {name}
            </h2>
            </Card.Header>
           
                <Card.Img variant="top" src={img} alt={name} className='itemImg img-thumbnail'/>
        
            <Card.Body>
                
                 <Card.Text className='cardText'>
                    Categoria: {category}
                 </Card.Text>
                 <Card.Text className='cardText'>
                    Descripción: {description}
                 </Card.Text>
                 <Card.Text className='cardText'>
                    Precio: ${price}
                </Card.Text>
                <Card.Text className='cardText'>
                    Stock disponible: {stock}
                 </Card.Text>
                
                 <div className="d-flex justify-content-center">
                        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
                    </div>
            </Card.Body>
        </Card>
       </div>  
    )
}

export default ItemDetail