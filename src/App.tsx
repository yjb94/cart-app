import React from 'react';
import styled from "styled-components";
import GlobalStyle from './styles/globalStyles';
import { Switch, Route, Redirect } from "react-router-dom";
import Products from './pages/Products';
import Cart from './pages/Cart';
import { useRecoilTransactionObserver_UNSTABLE } from 'recoil';
import { cartItemsState } from './stores/cart';
import { Layout } from 'antd';
import Navigation from './components/navigation/Navigation';
import strings from './strings/strings';
const { Content } = Layout;

const App: React.FC = () => {
  useRecoilTransactionObserver_UNSTABLE(({ snapshot }) => {
    const cartItems = snapshot.getLoadable(cartItemsState).contents;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  });

  const routes: RouteType[] = [
    { path: '/products', component: Products, name: strings["route.product"] },
    { path: '/cart', component: Cart, name: strings["route.cart"] },
  ]

  return (
    <AppContainer>
      <GlobalStyle />
      <Navigation routes={routes} />
      <Switch>
        {routes.map(route => <Route {...route} />)}
        <Route
          path="/"
          render={() => <Redirect to="/products" />}
        />
      </Switch>
    </AppContainer>
  )
};

const AppContainer = styled(Content)`
`;

export default App;
