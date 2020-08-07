import React from 'react';
import styled from "styled-components";

const ProductItem: React.FC<{ product: ProductType }> = ({
  product
}) => {


  return (
    <Container>
      {product.title}
      {product.price}
    </Container>
  )
};

const Container = styled.div`

`;

export default ProductItem;
