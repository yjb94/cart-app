import React from 'react';
import styled from "styled-components";
import { numberToPrice } from '../../utils';

const ProductItem: React.FC<{ product: ProductType }> = ({
  product
}) => {
  const addItem = () => {
    //TODO: add item from cart
  }
  const removeItem = () => {
    //TODO: remove item from cart
  }
  //TODO: styling

  return (
    <Container>
      <Image src={product.coverImage} />
      <Title>
        {product.title}
      </Title>
      <Price>
        {numberToPrice(product.price)}
      </Price>
      <CartButton
        onClick={addItem}
      >
        담기
      </CartButton>
      <CartButton
        onClick={removeItem}
      >
        빼기
      </CartButton>
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

const CartButton = styled.button`
`;

export default ProductItem;
