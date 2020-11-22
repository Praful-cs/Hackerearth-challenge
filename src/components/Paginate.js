import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Paginate = ({ pages, page, keyword, updatePage }) => {
  return pages > 1 && (
    <Pagination className="row justify-content-center">
      {[...Array(Number(page) + 10).keys()].slice(-11).map(x => (
        <LinkContainer onClick={updatePage} key={x + 1} to={keyword ? `/search/${keyword}/page/${x + 1}` : `/page/${x + 1}`}>
          <Pagination.Item active={x + 1 === page}>
            {x + 1}
          </Pagination.Item>
        </LinkContainer>
      ))}
    </Pagination>
  );
};

export default Paginate;
