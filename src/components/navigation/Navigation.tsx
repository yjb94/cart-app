import React from 'react';
import { useLocation } from 'react-router-dom';
import { Space } from 'antd';
import styled from 'styled-components';
import NavigationItem from './NavigationItem';
import colors from '../../styles/colors';

interface NavigationProps {
  routes: RouteType[]
}

const Navigation: React.FC<NavigationProps> = ({
  routes
}) => {
  const { pathname } = useLocation();

  return (
    <Container>
      <ItemsContainer
        align={'center'}
        size={'large'}
      >
        {routes.map(route =>
          <NavigationItem
            key={route.path}
            route={route}
            selected={pathname === route.path}
          />
        )}
      </ItemsContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  box-shadow: ${colors.shadow} 0px 1px 12px !important;
`;
const ItemsContainer = styled(Space)`
  padding: 16px;
`;

export default Navigation;
