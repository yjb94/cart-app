import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot, MutableSnapshot } from 'recoil';
import { cartItemsState } from './stores/cart';


const initializeState = (mutableSnapshot:MutableSnapshot) => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  mutableSnapshot.set(cartItemsState, cartItems);
};

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot initializeState={initializeState}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
