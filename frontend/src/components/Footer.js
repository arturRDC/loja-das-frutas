import React from 'react';
import { Container, Row, Column, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; Loja das Frutas
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
