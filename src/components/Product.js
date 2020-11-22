import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
// import Rating from './Rating';

const Product = ({ product, img }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product.id}?name=${product.name}&&img=${img.image}&&ounce=${product.ounces}&&abv=${product.abv}`}>
        <Card.Img height="200px" src={img.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.id}?name=${product.name}&&img=${img.image}&&ounce=${product.ounces}&&abv=${product.abv}`}>
          <Card.Title as="div">
            <strong>{product.style}</strong>
          </Card.Title>
        </Link>
        {/* <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text> */}
        <Card.Text as="h6">Ounces: {product.ounces}</Card.Text>
        <Card.Text as="h6">Abv: {product.abv}</Card.Text>
        <Card.Text as="h5">{product.name}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
