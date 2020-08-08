import React from 'react';
import styled from "styled-components";

const CouponItem: React.FC<{ coupon: CouponType }> = ({
  coupon
}) => {
  const onClickCoupon = () => {
    // TODO: change price with selected coupon
  }

  return (
    <Container
      onClick={onClickCoupon}
    >
      {coupon.title}
    </Container>
  )
};

const Container = styled.div`
`;

export default CouponItem;
