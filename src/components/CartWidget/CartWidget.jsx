import cart from '../../assets/cart.svg'
import './CartWidget.scss'

const CartWidget = () => {
    return (
        <div className="navbar_cart_container">
            <img className="navbar_cart_img" src={cart} alt='cart-widget'/>
           <h5 >0</h5>
        </div>
    )
}

export default CartWidget