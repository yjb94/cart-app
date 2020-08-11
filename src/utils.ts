import { MIN_QUANTITY } from "./hooks/useCart";
import strings from "./strings/strings";

export const numberWithCommas = (x: number): string => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const numberToPrice = (x: number): string => {
  return `${numberWithCommas(x)}${strings["global.won"]}`;
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

export const calcItemPrice = (item:CartItemType ): number => {
  return item.price * (item.quantity || MIN_QUANTITY);
}

export const calcItemsPrice = (items: CartItemType[]): number => {
  return items.map(calcItemPrice).reduce((a, b) => a + b, 0);
}