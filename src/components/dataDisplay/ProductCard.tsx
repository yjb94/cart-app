import React from 'react';
import styled from "styled-components";
import { numberToPrice } from '../../utils';
import useCart from '../../hooks/useCart';
import { Button } from '../button/Button';
import { Card } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
const { Meta } = Card;

interface ProductCardProps {
  product: ProductType;
  width?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  width = 490
}) => {
  const { cartItems, addItem, removeItem } = useCart();

  const onClickAddItem = () => {
    addItem(product);
  }
  const onClickRemoveItem = () => {
    removeItem(product);
  }

  const isInCart = !!cartItems.find(t => t.id === product.id);

  return (
    <Card
      hoverable
      style={{ width }}
      cover={<Image src={product.coverImage} />}
    >
      <Container>
        <Meta title={product.title} description={numberToPrice(product.price)} />
        <ButtonContainer>
          {isInCart ?
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
        </ButtonContainer>
      </Container>
    </Card>
  )
};

const Image = styled.img`
`;
const Container = styled.div`
`;
const ButtonContainer = styled.div`
  margin-top: 8px;
  float: right;
`;

export default ProductCard;
