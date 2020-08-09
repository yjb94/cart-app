
import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components'
import { Button as AntdButton } from 'antd';

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  children
}) => {
  return (
    <Container
      onClick={onClick}
    >
      {children}
    </Container>
  )
}

const Container = styled(AntdButton)`
`;