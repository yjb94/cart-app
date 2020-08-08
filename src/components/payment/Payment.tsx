import React from 'react';
import styled from "styled-components";
import useCart from '../../hooks/useCart';
import { numberToPrice } from '../../utils';

const Payment: React.FC = () => {
  const { price } = useCart();

  const onClickPayment = () => {
    // TODO: show purchased screen
  }

  // TODO: show discounted price

  return (
    <Container>
      {numberToPrice(price)}
      <PaymentButton
        onClick={onClickPayment}
      >
        결제
      </PaymentButton>
    </Container>
  )
};

const Container = styled.div`
`;

const PaymentButton = styled.button`
`;

export default Payment;
