import { atom } from "recoil";

export const cartItemsState = atom<ProductType[]>({
  key: 'cartItemsState',
  default: []
});

export const cartSelectedItemsState = atom<ProductType[]>({
  key: 'cartSelectedItemsState',
  default: []
});

export const cartPriceState = atom<number>({
  key: 'cartPriceState',
  default: 0
});
