import React from 'react';
import styled from "styled-components";
import { numberToPrice } from '../../utils';
import useCart from '../../hooks/useCart';

interface CartItemContainerType {
  selected: boolean | undefined;
}

const CartItem: React.FC<{ cartItem: CartItemType }> = ({
  cartItem
}) => {
  const { selectItem, deselectItem } = useCart();

  const onClickItem = () => {
    cartItem.selected ? deselectItem(cartItem) : selectItem(cartItem);
  }

  return (
    <Container
      onClick={onClickItem}
      selected={cartItem.selected}
    >
      <Image src={cartItem.coverImage} />
      <Title>
        {cartItem.title}
      </Title>
      <Price>
        {numberToPrice(cartItem.price)}
      </Price>
    </Container>
  )
};

const Container = styled.div`
  border: ${(props: CartItemContainerType) => props.selected ? '1px solid red' : 'none'};
`;

const Title = styled.div`
`;
const Price = styled.div`
`;
const Image = styled.img`
  width: 490px;
`;

export default CartItem;
