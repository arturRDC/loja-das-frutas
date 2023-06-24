import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userActions';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation();
  const redirect = location.search ? location.search.split('=')[1] : '';

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
  }

  return (
    <FormContainer>
      <h1>Sign in</h1>
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
