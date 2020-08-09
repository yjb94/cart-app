export const numberWithCommas = (x: number): string => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const numberToPrice = (x: number): string => {
  return `${numberWithCommas(x)}원`;
}

export function partition<T>(array: T[], rule: (elem: T) => boolean): PartitionType<T> {
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