import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    if (name.trim() === "" || phone.trim() === "" || email.trim() === "") {
      // Validar que todos los campos estén completos
      alert("Por favor, complete todos los campos del formulario.");
      return;
    }

    const userData = {
      name,
      phone,
      email,
    };
    onConfirm(userData);
  };

  return (
    <Container>
      <Form onSubmit={handleConfirm} className="form">
        <Form.Group controlId="formName">
          <Form.Label className="mt-2">Nombre y Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Escriba su nombre y apellido."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label className="mt-2">Teléfono</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Escriba su número de teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label className="mt-2">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Escriba su correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-5">
          Confirmar Compra
        </Button>
      </Form>
    </Container>
  );
};

export default CheckoutForm;
