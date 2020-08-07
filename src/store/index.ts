import { products } from './product';

export const createStore = () => {
  const store = {
    get products() {
      return products.sort((a, b) => a.score < b.score ? 1 : -1);
    }
  };

  return store;
};

export type TStore = ReturnType<typeof createStore>