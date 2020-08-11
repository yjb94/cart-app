import React from 'react';
import styled from "styled-components";
import useCart from '../../hooks/useCart';
import CartCard from '../dataDisplay/Card/CartCard';
import { Row, Col } from 'antd';
import Title from 'antd/lib/typography/Title';
import strings from '../../strings/strings';

const CartList: React.FC = () => {
  const { cartItems } = useCart();

  return (
    <Container>
      <Title
        level={3}
      >
        {strings["cart.title"]}
      </Title>
      <Row gutter={[16, 16]}>
        {cartItems.map(cartItem =>
          <Col
            key={cartItem.id}
            xs={24}
            sm={12}
            md={6}
          >
            <CartCard
              cartItem={cartItem}
            />
          </Col>
        )}
      </Row>
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CartList;
