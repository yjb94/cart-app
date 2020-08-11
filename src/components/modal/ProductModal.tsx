import React from 'react';
import styled from "styled-components";
import Modal, { ModalProps } from './Modal';
import { Typography } from 'antd';
import { numberToPrice } from '../../utils';
import strings from '../../strings/strings';
import useCart from '../../hooks/useCart';
import { ShoppingCartOutlined } from '@ant-design/icons';
const { Text } = Typography

export interface ProductModalProps extends ModalProps {
  product?: ProductType;
}

const ProductModal: React.FC<ProductModalProps> = (props) => {
  const {
    product,
  } = props;
  const { isInCart, isFull, addItem, removeItem } = useCart();

  if (!product) return null;

  const discountable = product.availableCoupon !== false;
  const selected = isInCart(product);

  const onClickOk = () => {
    selected ? removeItem(product) : addItem(product);
  }

  return (
    <Modal
      {...props}
      okText={selected ? strings["product.removeItem"] : strings["product.addItem"]}
      okType={selected ? 'default' : 'primary'}
      okButtonProps={{
        icon: <ShoppingCartOutlined />,
        disabled: !selected && isFull()
      }}
      onOk={onClickOk}
      cancelButtonProps={{
        style:{
          display: 'none'
        }
      }}
    >
      <Container>
        <Image src={product.coverImage} />
        <InfoContainer>
          <Title>{product.title}</Title>
          {discountable && 
            <Discountable
              mark
            >
              {strings["product.discountable"]}
            </Discountable>
          }
          <Price type="secondary">
            {numberToPrice(product.price)}
          </Price>
        </InfoContainer>
      </Container>
    </Modal>
  )
};

const Container = styled.div`
`;
const Image = styled.img`
  width:100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;
const Title = styled(Text)`
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
`;
const Price = styled(Text)`
  align-self: flex-end;
`;
const Discountable = styled(Text)`
  align-self: flex-end;
`;

export default ProductModal;
