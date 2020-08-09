import React from 'react';
import styled from "styled-components";
import useCoupon from '../../hooks/useCoupon';

interface CouponItemContainerType {
  selected: boolean | undefined;
}

const CouponItem: React.FC<{ coupon: CouponType }> = ({
  coupon
}) => {
  const { selectedCoupon, selectCoupon, deselectCoupon } = useCoupon();

  const isSelected = coupon === selectedCoupon;

  const onClickCoupon = () => {
    isSelected ? deselectCoupon(coupon) : selectCoupon(coupon);
  }

  return (
    <Container
      onClick={onClickCoupon}
      selected={isSelected}
    >
      {coupon.title}
    </Container>
  )
};

const Container = styled.div`
  border: ${(props: CouponItemContainerType) => props.selected ? '1px solid red' : 'none'};
`;

export default CouponItem;
