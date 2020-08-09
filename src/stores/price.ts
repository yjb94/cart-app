import { atom } from "recoil";

export const priceState = atom<number>({
  key: 'priceState',
  default: 0
});

export const discountedPriceState = atom<number>({
  key: 'discountedPriceState',
  default: priceState
});
