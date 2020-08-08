import { atom } from "recoil";

export const cartItemsState = atom<CartItemType[]>({
  key: 'cartItemsState',
  default: []
});
