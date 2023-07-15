import React, { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
  total: 0
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      const newItem = { ...item, quantity };
      setCart((prev) => [...prev, newItem]);
      setTotalQuantity((prevQuantity) => prevQuantity + quantity);
      setTotal((prevTotal) => prevTotal + item.price * quantity);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const itemToRemove = cart.find((prod) => prod.id === itemId);

    if (itemToRemove) {
      const cartUpdated = cart.filter((prod) => prod.id !== itemId);
      setCart(cartUpdated);
      setTotalQuantity((prevQuantity) => prevQuantity - itemToRemove.quantity);
      setTotal((prevTotal) => prevTotal - itemToRemove.price * itemToRemove.quantity);
    }
  };

  const updateQuantity = (itemId, newQuantity) => {
    const itemToUpdate = cart.find((prod) => prod.id === itemId);

    if (itemToUpdate) {
      const cartUpdated = cart.map((prod) =>
        prod.id === itemId ? { ...prod, quantity: newQuantity } : prod
      );

      setCart(cartUpdated);
      const quantityDifference = newQuantity - itemToUpdate.quantity;
      setTotalQuantity((prevQuantity) => prevQuantity + quantityDifference);
      setTotal((prevTotal) => prevTotal + itemToUpdate.price * quantityDifference);
    }
  };

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
    setTotal(0);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateQuantity, clearCart, totalQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
