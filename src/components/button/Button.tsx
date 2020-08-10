
import React from 'react';
import styled from 'styled-components'
import { Button as AntdButton } from 'antd';
import { ButtonProps } from 'antd/lib/button';

export const Button: React.FC<ButtonProps> = (props) => {
  const _onClick = (e:ClickEvent) => {
    if(props.onClick){
      e.preventDefault && e.preventDefault();
      e.stopPropagation && e.stopPropagation();
      props.onClick(e);
    }
  }

  return (
    <Container
      {...props}
      onClick={_onClick}
    >
      {props.children}
    </Container>
  )
}

const Container = styled(AntdButton)`
`;