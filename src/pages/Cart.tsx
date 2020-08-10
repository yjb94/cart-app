import React from 'react';
import CartList from '../components/cart/CartList';
import styled from 'styled-components';
import Payment from '../components/payment/Payment';
import CouponList from '../components/coupon/CouponList';
import { Divider, Row, Col } from 'antd';

const Cart: React.FC = () => {
  return (
    <Container>
      <CartList />
      <Divider />
      <Row>
        <Col
          xs={24}
          sm={12}
        >
          <CouponList />
        </Col>
        <Col 
          xs={24}
          sm={12}
        >
          <Payment />
        </Col>
      </Row>
      <Divider />
    </Container>
  )
};

const Container = styled.div`
  padding: 30px;
`;

export default Cart;
