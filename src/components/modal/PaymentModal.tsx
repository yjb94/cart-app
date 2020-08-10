import React, { useState } from 'react';
import Modal, { ModalProps } from './Modal';
import useCart from '../../hooks/useCart';
import PaymentLabel from '../payment/PaymentLabel';
import strings from '../../strings/strings';
import { Space, Divider, Typography, Checkbox, notification } from 'antd';
import styled from 'styled-components';
import { calcItemPrice, numberToPrice } from '../../utils';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

const { Text } = Typography;

const PaymentModal: React.FC<ModalProps> = (props) => {
  const {
    onRequestClose
  } = props;
    
  const { price, discountedPrice, cartItems } = useCart();

  const [termChecked, setTermChecked] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const onTermCheck = (e: CheckboxChangeEvent) => {
    setTermChecked(e.target.checked);
  }
  const onPay = () => {
    setLoading(true);
    setTimeout(() => {
      onRequestClose && onRequestClose(undefined);
      setLoading(false);
      Math.random() > 0.2 ? 
      notification.success({
        message: strings["payment.success"]
      })
      :
      notification.error({
        message: strings["error.paymentFail.title"],
        description: strings["error.paymentFail.description"],
      })
    }, 3000)
  }

  return (
    <Modal
      {...props}
      centered
      title={strings["payment.recieptTitle"]}
      okText={strings["payment.pay"]}
      okButtonProps={{
        disabled: !termChecked,
        loading
      }}
      onOk={onPay}
      cancelText={strings["global.cancel"]}
    >
      <Container>
        <ItemsContainer>
          {cartItems.map(item => {
            return (
              <ItemContainer key={item.id}>
                <Text>{item.title} x {item.quantity}</Text>
                <Text strong>{numberToPrice(calcItemPrice(item))}</Text>
              </ItemContainer>
            )
          })}
        </ItemsContainer>
        <Divider />
        <PriceContainer direction="vertical" align="end">
          <PaymentLabel
            label={strings["payment.totalOrderPrice"]}
            level={4}
            type={'secondary'}
            price={price}
          />
          <PaymentLabel
            label={strings["payment.discountedPrice"]}
            level={4}
            type={'secondary'}
            price={price - discountedPrice}
          />
          <PaymentLabel
            label={strings["payment.finalPrice"]}
            price={discountedPrice}
          />
        </PriceContainer>
        <Divider />
        <TermContainer>
          <Checkbox
            checked={termChecked}
            onChange={onTermCheck}
          >
            {strings["payment.term"]}
          </Checkbox>
        </TermContainer>
      </Container>
    </Modal>
  )
};

const Container = styled.div`
`;
const ItemsContainer = styled.div`
  margin-bottom: 24px;
`;
const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
const PriceContainer = styled(Space)`
  display: flex;
  justify-content: flex-end;
`;
const TermContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default PaymentModal;
