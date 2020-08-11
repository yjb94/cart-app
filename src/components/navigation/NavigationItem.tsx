import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'antd';

interface NavigationItemProps {
  route: RouteType;
  selected?: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  route,
  selected
}) => {
  return (
    <Container to={route.path}>
      <Button type={'text'}>
        <Name>
          {route.name}
          {selected && <Selected />}
        </Name>
      </Button>
    </Container>
  )
};

const Container = styled(Link)`
  position: relative;
`;
const Name = styled.div`
  position: relative;
  font-size: 16px;
  font-weight: bold;
`;
const Selected = styled.div`
  position: absolute;
  bottom: -8px;
  width: 100%;
  height: 2px;
  background-color: black;
`;

export default NavigationItem;
