import React from 'react';
import styled from "styled-components";
import useCart from '../../hooks/useCart';
import { numberToPrice } from '../../utils';

const Payment: React.FC = () => {
  const { price } = useCart();

  return (
    <Container>
      {numberToPrice(price)}
    </Container>
  )
};

const Container = styled.div`
`;

export default Payment;
