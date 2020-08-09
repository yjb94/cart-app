import React from 'react';
import styled from "styled-components";
import { numberToPrice } from '../../utils';
import useCart from '../../hooks/useCart';

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
        <CartButton
          onClick={onClickRemoveItem}
        >
          빼기
        </CartButton>
        :
        <CartButton
          onClick={onClickAddItem}
        >
          담기
        </CartButton>
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

const CartButton = styled.button`
`;

export default ProductItem;
