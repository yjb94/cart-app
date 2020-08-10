import React from 'react';
import styled from "styled-components";
import useCoupon from '../../hooks/useCoupon';
import CouponCard from '../dataDisplay/Card/CouponCard';
import { Typography } from 'antd';
import strings from '../../strings/strings';

const { Title } = Typography

const CouponList: React.FC = () => {
  const { coupons } = useCoupon();

  return (
    <Container>
      <Title
        level={3}
        style={{
          marginBottom: 8
        }}
      >
        {strings["coupon.title"]}
      </Title>
      <CouponsContainer>
        {coupons.map((coupon, idx) =>
          <CouponCard
            key={idx}
            coupon={coupon}
          />
        )}
      </CouponsContainer>
    </Container>
  )
};

const Container = styled.div`
`;

const CouponsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CouponList;
