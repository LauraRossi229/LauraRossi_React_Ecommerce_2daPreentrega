import './ItemDetailContainer.scss';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const itemRef = doc(db, 'productos', itemId);
    getDoc(itemRef)
      .then((resp) => {
        setProduct({ ...resp.data(), id: resp.id });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      {product && <ItemDetail {...product} />}
    </div>
  );
};

export default ItemDetailContainer;

