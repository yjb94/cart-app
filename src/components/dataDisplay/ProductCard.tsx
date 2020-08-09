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
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
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
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%"
      }}
      bodyStyle={{
        paddingTop: 24,
      }}
      cover={<Image src={product.coverImage} />}
      bordered={false}
      size={'small'}
    >
      <Container>
        <Meta
          title={product.title}
          description={numberToPrice(product.price)}
        />
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
  height: 250px;
  object-fit: cover;
`;
const Container = styled.div`
`;
const ButtonContainer = styled.div`
  margin-top: 8px;
  float: right;
`;

export default ProductCard;
