import React from 'react';
import styled from "styled-components";
import useCart from '../../hooks/useCart';
import { numberToPrice } from '../../utils';
import { Button } from '../button/Button';

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
      <Button
        onClick={onClickPayment}
      >
        결제
      </Button>
    </Container>
  )
};

const Container = styled.div`
`;

const Price = styled.div`
`;
const DiscountPrice = styled.div`
`;

export default Payment;
