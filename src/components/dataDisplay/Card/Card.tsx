import React, { ReactNode } from 'react';
import styled from "styled-components";
import { numberToPrice } from '../../../utils';
import { Card as AntdCard } from 'antd';
import colors from '../../../styles/colors';
import { CheckCircleTwoTone } from '@ant-design/icons';
const { Meta } = AntdCard;

const SELECTED_ACC_SIZE = 32;

interface CardProps {
  product: ProductType;
  selected?: boolean;
  selectedAcc?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  accesory?: ReactNode;
}

const Card: React.FC<CardProps> = ({
  product,
  selected,
  selectedAcc = <CheckCircleTwoTone />,
  onClick,
  accesory
}) => {
  return (
    <AntdCard
      hoverable
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        border: `1px solid ${selected ? colors.daybreakBlue : 'transparent'}`,
      }}
      bodyStyle={{
        paddingTop: 24,
        height: "100%",
        boxSizing: 'border-box'

      }}
      cover={<Image src={product.coverImage} />}
      bordered={false}
      size={'small'}
      onClick={onClick}
    >
      <Container>
        {selected &&
          <SelectedAccContainer>
            {selectedAcc}
          </SelectedAccContainer>
        }
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
const SelectedAccContainer = styled.div`
  position: absolute;
  right: -${SELECTED_ACC_SIZE / 8 * 3}px;
  top: -${SELECTED_ACC_SIZE / 5 * 3}px;
  font-size: ${SELECTED_ACC_SIZE}px;
  color: ${colors.daybreakBlue};
`;
const AccContainer = styled.div`
  margin-top: 8px;
  float: right;
`;

export default Card;
