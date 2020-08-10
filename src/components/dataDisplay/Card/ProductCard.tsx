import React from 'react';
import useCart from '../../../hooks/useCart';
import { Button } from '../../button/Button';
import { ShoppingCartOutlined } from '@ant-design/icons';
import strings from '../../../strings/strings';
import ItemCard, { ItemCardProps } from './ItemCard';

const ProductCard: React.FC<ItemCardProps> = (props) => {
  const { product } = props;
  const { isInCart, isFull, addItem, removeItem } = useCart();

  const onClickAddItem = () => {
    addItem(product);
  }
  const onClickRemoveItem = () => {
    removeItem(product);
  }

  const selected = isInCart(product);

  return (
    <ItemCard
      {...props}
      product={product}
      selected={selected}
      accesory={selected ?
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
          disabled={isFull()}
          icon={<ShoppingCartOutlined />}
        >
          {strings["product.addItem"]}
        </Button>
      }
    >
    </ItemCard>
  )
};

export default ProductCard;
