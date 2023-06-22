import React from 'react';
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
const Header = () => {
  return (
    <header>
      <Navbar bg='primary' data-bs-theme='dark' expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Loja das Frutas</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to={'/cart'}>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i>Carrinho
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/login'}>
                <Nav.Link>
                  <i className='fas fa-user'></i>Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
