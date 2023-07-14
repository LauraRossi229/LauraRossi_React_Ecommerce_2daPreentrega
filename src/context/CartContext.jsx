import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0, // Agregar totalQuantity al contexto
});

// ...

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar la variable totalQuantity y calcular su valor en el estado
  const [totalQuantity, setTotalQuantity] = useState(0);

  console.log(cart);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
      setTotalQuantity((prevQuantity) => prevQuantity + quantity); // Actualizar totalQuantity
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);

    const itemToRemove = cart.find((prod) => prod.id === itemId);
    setTotalQuantity((prevQuantity) => prevQuantity - itemToRemove.quantity); // Actualizar totalQuantity
  };

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0); // Restablecer totalQuantity a cero
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalQuantity }} // Incluir totalQuantity en el valor del contexto
    >
      {children}
    </CartContext.Provider>
  );
};
