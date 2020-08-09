import React from 'react';
import styled from "styled-components";
import { numberToPrice } from '../../utils';
import useCart from '../../hooks/useCart';
import { Button } from '../button/Button';

interface CartItemContainerType {
  selected: boolean | undefined;
}

const CartItem: React.FC<{ cartItem: CartItemType }> = ({
  cartItem
}) => {
  const { selectItem, deselectItem, addQuantity, subsQuantity } = useCart();

  const onClickItem = () => {
    cartItem.selected ? deselectItem(cartItem) : selectItem(cartItem);
  }

  const onClickAdd = (e: ClickEvent) => {
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();

    addQuantity(cartItem);
  }
  const onClickSubstract = (e: ClickEvent) => {
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();

    subsQuantity(cartItem);
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
      {cartItem.selected &&
        <QuantityContainer>
          <Quantity>
            {cartItem.quantity}개
          </Quantity>
          <Button
            onClick={onClickAdd}
          >
            +
          </Button>
          <Button
            onClick={onClickSubstract}
          >
            -
          </Button>
        </QuantityContainer>
      }
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

const QuantityContainer = styled.div`
`;
const Quantity = styled.div`
`;

export default CartItem;
