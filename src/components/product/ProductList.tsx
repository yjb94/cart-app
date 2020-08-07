import React from 'react';
import styled from "styled-components";
import { storeContext } from '../../context';
import { useObserver } from 'mobx-react-lite';
import ProductItem from './ProductItem';

const ProductList: React.FC = () => {
  const store = React.useContext(storeContext);
  if (!store) throw Error("Store shouldn't be null");

  return useObserver(() =>
    <Container>
      {store.products.map(product =>
        <ProductItem
          key={product.id}
          product={product}
        />
      )}
    </Container>
  )
};

const Container = styled.div`

`;

export default ProductList;
