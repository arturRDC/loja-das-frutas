import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  Button,
  ListGroup,
  Card,
  ListGroupItem,
} from 'react-bootstrap';

import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = () => {
  let { id } = useParams();
  const product = products.find((p) => p._id === id);
  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>
        Voltar
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} avaliações`}
                color={'#fce620'}
              />
            </ListGroup.Item>

            <ListGroup.Item>Preço: ${product.price}</ListGroup.Item>

            <ListGroup.Item>Descrição: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Preço</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Disponibilidade: </Col>
                  <Col>
                    {product.stockCount > 0 ? 'Em estoque' : 'Esgotado'}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.stockCount === 0}
                >
                  Adicionar ao carrinho
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
