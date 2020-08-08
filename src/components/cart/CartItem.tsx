import React from 'react';
import styled from "styled-components";
import { numberToPrice } from '../../utils';

const CartItem: React.FC<{ product: ProductType }> = ({
  product
}) => {
  return (
    <Container>
      <Image src={product.coverImage} />
      <Title>
        {product.title}
      </Title>
      <Price>
        {numberToPrice(product.price)}
      </Price>
    </Container>
  )
};

const Container = styled.div`
`;

const Title = styled.div`
`;
const Price = styled.div`
`;
const Image = styled.img`
  width: 490px;
`;

export default CartItem;
