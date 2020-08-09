import { MIN_QUANTITY } from "./hooks/useCart";

export const numberWithCommas = (x: number): string => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const numberToPrice = (x: number): string => {
  return `${numberWithCommas(x)}원`;
}

export const partition = <T>(array: T[], rule: (elem: T) => boolean): PartitionType<T> => {
  return array.reduce<PartitionType<T>>(({ pass, fail }, elem) => {
    return rule(elem) ? {
      pass: [...pass, elem],
      fail
    } : {
        pass,
        fail: [...fail, elem]
      };
  }, {
    pass: [],
    fail: []
  });
}

export const calcItemsPrice = (items: CartItemType[]): number => {
  return items.map(item => item.price * (item.quantity || MIN_QUANTITY)).reduce((a, b) => a + b, 0);
}