import './Cart.scss';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';


const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="Cart">
        <h1>No hay items en el carrito</h1>
        <Link to="/" className="Option btn btn-primary">Productos</Link>
      </div>
    );
  }

  return (
    <div className="Cart">
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3>Total: ${total}</h3>
      <p>Cantidad total de cupos solicitados: {totalQuantity}</p>
      <button onClick={() => clearCart()} className="Button btn btn-secondary">Limpiar carrito</button>
      <div className="button-container">
      <Link to="/" className="Option btn btn-primary">Seguir comprando</Link>
      <Link to="/checkout" className="Option btn btn-primary">Checkout</Link>
</div>

    </div>
  );
};

export default Cart;