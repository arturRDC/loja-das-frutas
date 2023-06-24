import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

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
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Perfil</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={handleLogout}>
                    Sair
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to={'/login'}>
                  <Nav.Link>
                    <i className='fas fa-user'></i>Login
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
