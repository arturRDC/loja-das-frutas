import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userActions';
import { USER_LOGIN_REQUEST } from '../constants/userConstants';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation();
  const redirect = location.search ? location.search.split('=')[1] : '';
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate('/' + redirect);
    }
  }, [navigate, userInfo, redirect]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(email, password));
  }

  return (
    <FormContainer>
      <h1>Sign in</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='email'>
          <Form.Label>Endereço de Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type='password'
            placeholder='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Entrar
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Não tem conta ainda?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Crie sua conta aqui
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
