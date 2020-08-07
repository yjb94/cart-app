import React from 'react';
import styled from "styled-components";
import GlobalStyle from './styles/globalStyles';
import { Switch, Route } from "react-router-dom";
import Products from './pages/Products';

const App: React.FC = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Switch>
        <Route path="/products" component={Products} />
      </Switch>
    </AppContainer>
  )
};

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default App;
