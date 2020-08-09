import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from "styled-components";
import { productState } from '../../stores/product';
import { Pagination } from 'antd';
import ProductCard from '../dataDisplay/ProductCard';

const LIMIT: number = 5;
const DEFAULT_PAGE: number = 1;

const ProductList: React.FC = () => {
  const [page, setPage] = useState<number>(DEFAULT_PAGE);

  const products = useRecoilValue(productState);

  const onChange = (page: number) => {
    setPage(page);
  }

  return (
    <Container>
      {products.slice((page - 1) * LIMIT, page * LIMIT).map(product =>
        <ProductCard
          key={product.id}
          product={product}
        />
      )}
      <Pagination
        current={page}
        onChange={onChange}
        defaultPageSize={LIMIT}
        total={products.length}
      />
    </Container>
  )
};

const Container = styled.div`
`;

export default ProductList;
