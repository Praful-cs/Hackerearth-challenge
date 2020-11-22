import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';

const ProductScreen = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const product = {};
    let url = new URL(window.location.href);
    let searchParams = new URLSearchParams(url.search);
    product.name = searchParams.get('name');
    product.image = searchParams.get('img');
    product.ounce = searchParams.get('ounce');
    product.abv = searchParams.get('abv');
    setProduct(product);
  }, []);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Ounces: {product.ounce}
            </ListGroup.Item>
            <ListGroup.Item>
              Abv: {product.abv}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
