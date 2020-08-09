import React from 'react';
import styled from "styled-components";
import { numberToPrice } from '../../utils';
import useCart from '../../hooks/useCart';
import { Button } from '../button/Button';

const ProductItem: React.FC<{ product: ProductType }> = ({
  product
}) => {
  const { cartItems, addItem, removeItem } = useCart();

  const onClickAddItem = () => {
    addItem(product);
  }
  const onClickRemoveItem = () => {
    removeItem(product);
  }
  //TODO: styling

  const isInCart = !!cartItems.find(t => t.id === product.id);

  return (
    <Container>
      <Image src={product.coverImage} />
      <Title>
        {product.title}
      </Title>
      <Price>
        {numberToPrice(product.price)}
      </Price>
      {isInCart ?
        <Button
          onClick={onClickRemoveItem}
        >
          빼기
        </Button>
        :
        <Button
          onClick={onClickAddItem}
        >
          담기
        </Button>
      }
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

export default ProductItem;
