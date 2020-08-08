import { useRecoilState } from 'recoil';
import { cartItemsState, cartSelectedItemsState, cartPriceState } from '../stores/cart';

export const MAX_ITEM_COUNT = 3;

const useCart = () => {
  const [cartItems, setCartItems] = useRecoilState<CartItemType[]>(cartItemsState);
  const [selectedItems, setSelectedItems] = useRecoilState<CartItemType[]>(cartSelectedItemsState);
  const [price, setPrice] = useRecoilState<number>(cartPriceState);

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

  const selectItemWithState = (newItem: CartItemType, selected: boolean) => {
    const newCartItems = cartItems.map(cartItem => {
      const isSelectingItem = cartItem.id === newItem.id;
      if(isSelectingItem) {
        return {
          ...cartItem,
          selected
        }
      } else {
        return cartItem;
      }
    });
    setPrice(price + (selected ? newItem.price : -newItem.price));
    setSelectedItems(newCartItems.filter(t => t.selected));
    setCartItems(newCartItems);
  }

  const selectItem = (item: CartItemType) => {
    selectItemWithState(item, true);
  }

  const deselectItem = (item: CartItemType) => {
    selectItemWithState(item, false);
  }

  return { cartItems, selectedItems, price, addItem, removeItem, selectItem, deselectItem }
};

export default useCart;


