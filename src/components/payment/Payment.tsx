import React from 'react';
import useCart from '../../hooks/useCart';
import { Button } from '../button/Button';
import { Space, Popover } from 'antd';
import strings from '../../strings/strings';
import PaymentLabel from './PaymentLabel';
import styled from 'styled-components';
import useModal from '../../hooks/useModal';
import PaymentModal from '../modal/PaymentModal';
import useCoupon from '../../hooks/useCoupon';

const Payment: React.FC = () => {
  const { price, discountedPrice } = useCart();
  const { visible, openModal, closeModal } = useModal();
  const { selectedCoupon } = useCoupon();

  const onClickPayment = () => {
    openModal();
  }

  const isDiscounted = price !== discountedPrice;

  return (
    <Container>
      <Space direction="vertical" align="end">
        <Popover
          content={strings["payment.couponAvailable"]}
          visible={!selectedCoupon}
          trigger="hover"
          placement="topRight"
        >
          <PaymentLabel
            label={strings["payment.totalPrice"]}
            level={4}
            type={'secondary'}
            stroke={isDiscounted}
            price={price}
          />
        </Popover>
        <PaymentLabel
          label={strings["payment.finalPrice"]}
          price={discountedPrice}
        />
        <PayButton
          onClick={onClickPayment}
        >
          {strings["payment.pay"]}
        </PayButton>
      </Space>
      <PaymentModal
        visible={visible}
        onRequestClose={closeModal}
      >

      </PaymentModal>
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const PayButton = styled(Button)`
  margin-top: 16px;
`;

export default Payment;
