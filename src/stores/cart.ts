import { atom } from "recoil";

export const cartItemsState = atom<ProductType[]>({
  key: 'cartItemsState',
  default: []
});
