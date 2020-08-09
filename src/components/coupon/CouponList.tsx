import React from 'react';
import styled from "styled-components";
import CouponItem from './CouponItem';
import useCoupon from '../../hooks/useCoupon';

const CouponList: React.FC = () => {
  const { coupons } = useCoupon();

  return (
    <Container>
      {coupons.map((coupon, idx) =>
        <CouponItem
          key={idx}
          coupon={coupon}
        />
      )}
    </Container>
  )
};

const Container = styled.div`
`;

export default CouponList;
