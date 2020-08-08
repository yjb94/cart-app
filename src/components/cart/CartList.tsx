import React from 'react';
import styled from "styled-components";
import useCart from '../../hooks/useCart';
import CartItem from './CartItem';

const CartList: React.FC = () => {
  const { cartItems } = useCart();

  return (
    <Container>
      {cartItems.map(product =>
        <CartItem
          key={product.id}
          product={product}
        />
      )}
    </Container>
  )
};

const Container = styled.div`
`;

export default CartList;
