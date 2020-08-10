import React from 'react';
import useCart from '../../hooks/useCart';
import { Button } from '../button/Button';
import { Space } from 'antd';
import strings from '../../strings/strings';
import PaymentLabel from './PaymentLabel';
import styled from 'styled-components';
import useModal from '../../hooks/useModal';
import PaymentModal from '../modal/PaymentModal';


const Payment: React.FC = () => {
  const { price, discountedPrice } = useCart();
  const { visible, openModal, closeModal } = useModal();

  const onClickPayment = () => {
    openModal();
  }

  const isDiscounted = price !== discountedPrice;

  return (
    <Container>
      <Space direction="vertical" align="end">
        <PaymentLabel
          label={strings["payment.totalPrice"]}
          level={4}
          type={'secondary'}
          stroke={isDiscounted}
          price={price}
        />
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
