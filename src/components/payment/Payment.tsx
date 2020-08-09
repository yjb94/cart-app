import React from 'react';
import styled from "styled-components";
import useCart from '../../hooks/useCart';
import { numberToPrice } from '../../utils';

const Payment: React.FC = () => {
  const { price, discountedPrice } = useCart();

  const onClickPayment = () => {
    // TODO: show purchased screen
  }

  // TODO: show discounted price

  return (
    <Container>
      <Price>
        {numberToPrice(price)}
      </Price>
      <DiscountPrice>
        할인된 금액: {numberToPrice(discountedPrice)}
      </DiscountPrice>
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

const Price = styled.div`
`;
const DiscountPrice = styled.div`
`;

const PaymentButton = styled.button`
`;

export default Payment;
