import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from "styled-components";
import ProductItem from './ProductItem';
import { productState } from '../../stores/product';

const LIMIT: number = 5;
const DEFAULT_OFFSET: number = 0;

const ProductList: React.FC = () => {
  const [offset, setOffset] = useState<number>(DEFAULT_OFFSET);
  const [limit] = useState<number>(LIMIT);

  const products = useRecoilValue(productState);
  const maxOffset: number = products.length - LIMIT;

  const onClickPaging = (dir: 1 | -1) => {
    setOffset(Math.min(Math.max(0, offset + dir * limit), maxOffset));
  }

  return (
    <Container>
      {products.slice(offset, offset + limit).map(product =>
        <ProductItem
          key={product.id}
          product={product}
        />
      )}
      {DEFAULT_OFFSET < offset &&
        <Arrow
          onClick={() => onClickPaging(-1)}
        >
          {"<"}
        </Arrow>
      }

      {offset < maxOffset &&
        <Arrow
          onClick={() => onClickPaging(1)}
        >
          {">"}
        </Arrow>
      }
    </Container>
  )
};

const Container = styled.div`
`;

const Arrow = styled.button`
`;

export default ProductList;
