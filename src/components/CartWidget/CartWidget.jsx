import './CartWidget.scss';
import { useContext } from 'react';
import cart from '../../assets/cart.svg';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <div className="navbar_cart_container">
      <img className="navbar_cart_img" src={cart} alt="cart-widget" />
      <Link to="/cart" className="navbar_cart_link">
        <h3>{totalQuantity}</h3>
        {console.log("totalQuantity:", totalQuantity)}
      </Link>
    </div>
  );
};

export default CartWidget;
