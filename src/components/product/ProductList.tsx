import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from "styled-components";
import ProductItem from './ProductItem';
import { productState } from '../../stores/product';
import { Button } from '../button/Button';

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
        <Button
          onClick={() => onClickPaging(-1)}
        >
          {"<"}
        </Button>
      }

      {offset < maxOffset &&
        <Button
          onClick={() => onClickPaging(1)}
        >
          {">"}
        </Button>
      }
    </Container>
  )
};

const Container = styled.div`
`;

export default ProductList;
