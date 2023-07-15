import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="blue-footer">
      <Container className="container">
        <Row>
          <Col>
            <p className="text-center">
              © {new Date().getFullYear()} PlanetPro Digital. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">
              <a href="mailto:info@example.com">info@planetpro.com</a> | Teléfono: +123456789
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
