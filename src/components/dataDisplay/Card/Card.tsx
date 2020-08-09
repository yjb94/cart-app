import React, { ReactNode } from 'react';
import { Card as AntdCard } from 'antd';
import colors from '../../../styles/colors';
import { CardProps as AntdCardProps } from 'antd/lib/card';
import styled from 'styled-components';
import { CheckCircleTwoTone } from '@ant-design/icons';

export interface CardProps extends AntdCardProps {
  selected?: boolean;
  selectedAcc?: ReactNode;
}

const SELECTED_ACC_SIZE = 32;

const Card: React.FC<CardProps> = (props) => {
  const {
    style,
    selected,
    selectedAcc = <CheckCircleTwoTone />
  } = props;

  return (
    <AntdCard
      {...props}
      hoverable
      style={{
        ...style,
        border: `1px solid ${selected ? colors.daybreakBlue : 'transparent'}`,
      }}
      bordered={false}
      size={'small'}
    >
      <Container>
        {selected &&
          <SelectedAccContainer>
            {selectedAcc}
          </SelectedAccContainer>
        }
        {props.children}
      </Container>
    </AntdCard>
  )
};

const Container = styled.div`
`;
const SelectedAccContainer = styled.div`
  position: absolute;
  right: -${SELECTED_ACC_SIZE * 3 / 8}px;
  top: -${SELECTED_ACC_SIZE * 7 / 10}px;
  font-size: ${SELECTED_ACC_SIZE}px;
  color: ${colors.daybreakBlue};
`;

export default Card;
