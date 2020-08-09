import React from 'react';
import useCart, { MAX_ITEM_COUNT } from '../../../hooks/useCart';
import { Button } from '../../button/Button';
import { ShoppingCartOutlined, ShoppingTwoTone } from '@ant-design/icons';
import Card from './Card';
import strings from '../../../strings/strings';

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
}) => {
  const { cartItems, addItem, removeItem } = useCart();

  // TODO: alert or action after adding, deleting item
  const onClickAddItem = () => {
    addItem(product);
  }
  const onClickRemoveItem = () => {
    removeItem(product);
  }

  const isInCart = !!cartItems.find(t => t.id === product.id);
  const isFull = cartItems.length >= MAX_ITEM_COUNT;

  return (
    <Card
      product={product}
      accesory={isInCart ?
        <Button
          onClick={onClickRemoveItem}
          icon={<ShoppingCartOutlined />}
        >
          {strings["product.removeItem"]}
        </Button>
        :
        <Button
          onClick={onClickAddItem}
          type={'primary'}
          disabled={isFull}
          icon={<ShoppingCartOutlined />}
        >
          {strings["product.addItem"]}
        </Button>
      }
    />
  )
};

export default ProductCard;
