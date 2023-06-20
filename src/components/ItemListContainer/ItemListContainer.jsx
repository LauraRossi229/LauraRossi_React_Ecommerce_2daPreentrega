import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.scss'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then(response => {
        setProducts(response);
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

