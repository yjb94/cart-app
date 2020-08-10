import React, { ReactNode } from 'react';
import styled from "styled-components";
import { numberToPrice } from '../../../utils';
import { Card as AntdCard } from 'antd';
import Card, { CardProps } from './Card';

const { Meta } = AntdCard;

export interface ItemCardProps extends CardProps {
  product: ProductType;
  accesory?: ReactNode;
}

const ItemCard: React.FC<ItemCardProps> = (props) => {
  const { 
    product,
    accesory
  } = props;

  return (
    <Card
      {...props}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
      bodyStyle={{
        paddingTop: 24,
        height: "100%",
        boxSizing: 'border-box'
      }}
      cover={<Image src={product.coverImage} />}
    >
      <Container>
        <Meta
          title={product.title}
          description={numberToPrice(product.price)}
        />
        {accesory &&
          <AccContainer>
            {accesory}
          </AccContainer>
        }
      </Container>
    </Card>
  )
};

const Container = styled.div`
`;
const Image = styled.img`
  height: 250px;
  object-fit: cover;
`;
const AccContainer = styled.div`
  margin-top: 8px;
  float: right;
`;

export default ItemCard;
