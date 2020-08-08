import React from 'react';
import styled from "styled-components";
import useCart from '../../hooks/useCart';
import CartItem from './CartItem';

const CartList: React.FC = () => {
  const { cartItems } = useCart();

  return (
    <Container>
      {cartItems.map(cartItem =>
        <CartItem
          key={cartItem.id}
          cartItem={cartItem}
        />
      )}
    </Container>
  )
};

const Container = styled.div`
`;

export default CartList;
