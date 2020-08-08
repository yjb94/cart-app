import { useRecoilState } from 'recoil';
import { cartItemsState } from '../stores/cart';

export const MAX_ITEM_COUNT = 3;

const useCart = () => {
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);

  const addItem = (item: CartItemType
  ) => {
    if (cartItems.length >= MAX_ITEM_COUNT) {
      //TODO: error handling
      return;
    }

    const newCartItems = [
      ...cartItems,
      item,
    ];

    setCartItems(newCartItems);
  }

  const removeItem = (item: CartItemType) => {
    setCartItems(cartItems.filter(t => t.id !== item.id));
  }

  const selectItemWithState = (item: CartItemType, selected: boolean) => {
    const newCartItems = cartItems.map(t => {
      return t.id === item.id ? {
        ...item,
        selected
      } : item
    })
    setCartItems(newCartItems);
  }

  const selectItem = (item: CartItemType) => {
    selectItemWithState(item, true);
  }

  const deselectItem = (item: CartItemType) => {
    selectItemWithState(item, false);
  }

  return { cartItems, addItem, removeItem, selectItem, deselectItem }
};

export default useCart;


