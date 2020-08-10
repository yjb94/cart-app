import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot, MutableSnapshot } from 'recoil';
import { cartItemsState } from './stores/cart';
import { priceState } from './stores/price';
import { calcItemsPrice } from './utils';
import 'antd/dist/antd.css';

const initializeState = (mutableSnapshot: MutableSnapshot) => {
  const cartItems: CartItemType[] = JSON.parse(localStorage.getItem('cartItems') || '[]');
  mutableSnapshot.set(cartItemsState, cartItems);

  const selectedItems: CartItemType[] = cartItems.filter(t => t.selected);

  const price:number = calcItemsPrice(selectedItems);
  mutableSnapshot.set(priceState, price);
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
