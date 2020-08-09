import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot, MutableSnapshot } from 'recoil';
import { cartItemsState, cartPriceState } from './stores/cart';
import { MIN_QUANTITY } from './hooks/useCart';


const initializeState = (mutableSnapshot: MutableSnapshot) => {
  const cartItems: CartItemType[] = JSON.parse(localStorage.getItem('cartItems') || '[]');
  mutableSnapshot.set(cartItemsState, cartItems);

  const selectedItems: CartItemType[] = cartItems.filter(t => t.selected);

  const price:number = selectedItems.map(t => t.price * (t.quantity || MIN_QUANTITY)).reduce((a, b) => a + b, 0);
  mutableSnapshot.set(cartPriceState, price);
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
