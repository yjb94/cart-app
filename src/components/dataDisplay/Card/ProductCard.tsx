import React from 'react';
import useCart from '../../../hooks/useCart';
import { Button } from '../../button/Button';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Card from './Card';

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

  return (
    <Card
      product={product}
      accesory={isInCart ?
        <Button
          onClick={onClickRemoveItem}
        >
          <ShoppingCartOutlined />
          빼기
        </Button>
        :
        <Button
          onClick={onClickAddItem}
        >
          <ShoppingCartOutlined />
          담기
        </Button>
      }
    />
  )
};

export default ProductCard;
