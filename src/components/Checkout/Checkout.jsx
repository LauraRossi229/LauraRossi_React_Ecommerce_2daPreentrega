import React, { useState, useContext } from "react";
import { Container, Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import { Timestamp, writeBatch, doc, collection, addDoc, getDoc } from "firebase/firestore";

import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { db } from "../../firebase/Config";
import './Checkout.scss'

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    if (!name || !phone || !email) {
      // Validar que todos los campos estén completos
      alert("Por favor, complete todos los campos del formulario.");
      return;
    }

    setLoading(true);
    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total || 0,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);

      const outOfStock = [];

      for (const item of cart) {
        const { id, quantity } = item;
        const productRef = doc(collection(db, "productos"), id);
        const productDoc = await getDoc(productRef);

        if (productDoc.exists()) {
          const { stock } = productDoc.data();

          if (stock >= quantity) {
            const newStock = stock - quantity;
            batch.update(productRef, { stock: newStock });
          } else {
            outOfStock.push(id);
          }
        }
      }

      if (outOfStock.length > 0) {
        console.log("Los siguientes productos están fuera de stock:", outOfStock);
        return;
      }

      await batch.commit();

      const orderRef = await addDoc(collection(db, "ordenes"), objOrder);
      const orderId = orderRef.id;
      setOrderId(orderId);

      clearCart();
    } catch (error) {
      console.error("Error al crear la orden:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleContinueShopping = () => {
    // Redireccionar al inicio
    window.location.href = "/";
  };

  const handleExit = () => {
    
    window.location.href = "/";
  };

  if (loading) {
    return <h1>Se está generando su orden...</h1>;
  }

  if (orderId) {
    return (
      <Container>
        <h1>Orden generada exitosamente</h1>
        <p>El ID de su orden es: {orderId}</p>
        <p>¿Desea salir o continuar con su compra?</p>
        <Button variant="primary" className="mt-2 boton"  onClick={handleExit}>
          Salir
        </Button>
        <Button variant="secondary" className="mt-2 boton" onClick={handleContinueShopping}>
          Continuar comprando
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </Container>
  );
};

export default Checkout;
