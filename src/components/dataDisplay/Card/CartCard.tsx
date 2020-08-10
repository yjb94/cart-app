import React from 'react';
import styled from "styled-components";
import useCart from '../../../hooks/useCart';
import { Button } from '../../button/Button';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Space, Typography } from 'antd';
import ItemCard from './ItemCard';
const { Text } = Typography;

const CartCard: React.FC<{ cartItem: CartItemType }> = ({
  cartItem
}) => {
  const { selectItem, deselectItem, addQuantity, subsQuantity } = useCart();

  const onClickItem = () => {
    cartItem.selected ? deselectItem(cartItem) : selectItem(cartItem);
  }

  const onClickAdd = () => {
    addQuantity(cartItem);
  }
  const onClickSubstract = () => {
    subsQuantity(cartItem);
  }

  return (
    <ItemCard
      product={cartItem}
      onClick={onClickItem}
      selected={cartItem.selected}
      accesory={cartItem.selected &&
        <AccContainer>
          <Button
            onClick={onClickSubstract}
            shape="circle"
            icon={<MinusOutlined />}
          />
          <Text>
            {cartItem.quantity}개
          </Text>
          <Button
            onClick={onClickAdd}
            shape="circle"
            icon={<PlusOutlined />}
          />
        </AccContainer>
      }
    />
  )
};

const AccContainer = styled(Space)`
  margin-top: 8px;
`;

export default CartCard;
