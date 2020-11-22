import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import { listProducts, listProductImages } from '../actions/productActions';

const HomeScreen = ({ match }) => {
  const dispatch = useDispatch();
  const keyword = match.params.keyword || '';
  const [currentPage, setCurrentPage] = useState(match.params.pageNumber || 1);
  const [keyWord, setkeyWord] = useState(keyword);
  const [searchProducts, setSeacrhProducts] = useState([]);
  const productList = useSelector(state => state.productList);
  const productImagesList = useSelector(state => state.productImages);
  const { products, loading, error } = productList;
  const { images } = productImagesList;

  useEffect(() => {
    dispatch(listProducts());
    dispatch(listProductImages());
    if (keyword) {
      const arr = products.filter(item => item.style.toLowerCase().includes(keyword) && item);
      setSeacrhProducts(arr);
      setkeyWord(keyword);
    }
  }, [dispatch, keyWord]);

  const updatePage = () => {
    setCurrentPage(match.params.pageNumber);
  };

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> :
        <>
          <Row>
            {
              searchProducts && searchProducts.length ?
                searchProducts.slice(currentPage * 20 - 20, currentPage * 20).map((product, i) => (
                  <Col className="mb-4" key={product.id} sm={12} md={6} lg={4} xl={3}>
                    <Product
                      product={product}
                      img={images[i % 5]}
                      keyword={keyWord}
                    />
                  </Col>
                )) :
                products.slice(currentPage * 20 - 20, currentPage * 20).map((product, i) => (
                  <Col className="mb-4" key={product.id} sm={12} md={6} lg={4} xl={3}>
                    <Product
                      product={product}
                      img={images[i % 5]}
                      keyword={keyWord}
                    />
                  </Col>
                ))
            }
          </Row>
          <Paginate updatePage={updatePage} pages={Math.ceil(products.length / 20)} page={currentPage} />
        </>
      }
    </>
  );
};

export default HomeScreen;
