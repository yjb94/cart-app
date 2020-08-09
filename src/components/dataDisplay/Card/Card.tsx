import React, { ReactNode } from 'react';
import styled from "styled-components";
import { numberToPrice } from '../../../utils';
import { Card as AntdCard } from 'antd';
const { Meta } = AntdCard;

interface CardProps {
  product: ProductType;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  accesory?: ReactNode;
}

const Card: React.FC<CardProps> = ({
  product,
  onClick,
  accesory
}) => {
  return (
    <AntdCard
      hoverable
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%"
      }}
      bodyStyle={{
        paddingTop: 24,
        height: "100%"
      }}
      cover={<Image src={product.coverImage} />}
      bordered={false}
      size={'small'}
      onClick={onClick}
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
    </AntdCard>
  )
};

const Image = styled.img`
  height: 250px;
  object-fit: cover;
`;
const Container = styled.div`
`;
const AccContainer = styled.div`
  margin-top: 8px;
  float: right;
`;

export default Card;
