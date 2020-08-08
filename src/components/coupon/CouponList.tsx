import React from 'react';
import styled from "styled-components";
import { useRecoilValue } from 'recoil';
import { couponState } from '../../stores/coupon';
import CouponItem from './CouponItem';

const CouponList: React.FC = () => {
  const coupons = useRecoilValue(couponState);

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
