import React from 'react';
import CartList from '../components/cart/CartList';
import styled from 'styled-components';
import Payment from '../components/payment/Payment';
import CouponList from '../components/coupon/CouponList';

const Cart: React.FC = () => {
  return (
    <Container>
      <CartList />
      <Payment />
      <CouponList />
    </Container>
  )
};

const Container = styled.div`
`;

export default Cart;
