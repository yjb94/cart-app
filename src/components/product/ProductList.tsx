import React, { useState } from 'react';
import styled from "styled-components";
import { storeContext } from '../../context';
import { useObserver } from 'mobx-react-lite';
import ProductItem from './ProductItem';

const LIMIT: number = 5;
const DEFAULT_OFFSET: number = 0;

const ProductList: React.FC = () => {
  const [offset, setOffset] = useState<number>(DEFAULT_OFFSET);
  const [limit] = useState<number>(LIMIT);

  const store = React.useContext(storeContext);
  if (!store) throw Error("Store shouldn't be null");

  const maxOffset = store.products.length - LIMIT;

  const onClickPaging = (dir: 1 | -1) => {
    setOffset(Math.min(Math.max(0, offset + dir * limit), maxOffset));
  }

  return useObserver(() =>
    <Container>
      {store.products.slice(offset, offset + limit).map(product =>
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
