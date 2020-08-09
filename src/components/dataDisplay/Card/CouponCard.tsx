import React, { ReactNode } from 'react';
import styled from "styled-components";
import { numberToPrice } from '../../../utils';
import { Card as AntdCard } from 'antd';
import { BarcodeOutlined } from '@ant-design/icons';
import Card, { CardProps } from './Card';
import useCoupon from '../../../hooks/useCoupon';

const { Meta } = AntdCard;

interface CouponCardProps extends CardProps {
  coupon: CouponType;
}

const CouponCard: React.FC<CouponCardProps> = (props) => {
  const { 
    coupon,
  } = props;
  const { selectedCoupon, selectCoupon, deselectCoupon } = useCoupon();

  const isSelected = coupon === selectedCoupon;

  const onClickCoupon = () => {
    isSelected ? deselectCoupon(coupon) : selectCoupon(coupon);
  }

  return (
    <Card
      {...props}
      onClick={onClickCoupon}
      selected={isSelected}
      style={{
        marginBottom: 4,
        width: 220,
      }}
    >
      <Meta
        avatar={<BarcodeOutlined />}
        title={coupon.title}
      />
    </Card>
  )
};

export default CouponCard;
