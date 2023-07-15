import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.scss'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where} from 'firebase/firestore'
import db from '../../firebase/config';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {

    const productRef = collection(db, "productos")
    const q = categoryId
              ? query(productRef, where("category", "==", categoryId))
              : productRef
    getDocs(q)
      .then ((resp)=>{
        const items = resp.docs.map((doc)=>({...doc.data(), id: doc.id}))
        setProducts(items)
      })
      .catch(error => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div className="list_container">
    <h2>Tienda Digital</h2>
      <hr />

      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
