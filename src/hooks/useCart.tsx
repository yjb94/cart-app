import { useRecoilState } from 'recoil';
import { cartItemsState, cartPriceState } from '../stores/cart';
import { useEffect } from 'react';

export const MAX_ITEM_COUNT = 3;
export const MIN_QUANTITY = 1;

const useCart = () => {
  const [cartItems, setCartItems] = useRecoilState<CartItemType[]>(cartItemsState);
  const [price, setPrice] = useRecoilState<number>(cartPriceState);

  useEffect(() => {
    const newPrice = cartItems.filter(t => t.selected).map(t => t.price * (t.quantity || MIN_QUANTITY)).reduce((a, b) => a + b, 0);
    setPrice(newPrice);
  }, [cartItems])

  const addItem = (item: CartItemType) => {
    if (cartItems.length >= MAX_ITEM_COUNT) {
      //TODO: error handling
      return;
    }

    setCartItems([
      ...cartItems,
      {
        ...item,
        quantity: MIN_QUANTITY
      },
    ]);
  }

  const removeItem = (item: CartItemType) => {
    setCartItems(cartItems.filter(t => t.id !== item.id));
  }

  const selectItemWithState = (newItem: CartItemType, selected: boolean) => {
    const newCartItems = cartItems.map(cartItem => {
      const isSelectingItem = cartItem.id === newItem.id;
      if (isSelectingItem) {
        return {
          ...cartItem,
          selected
        }
      } else {
        return cartItem;
      }
    });
    setCartItems(newCartItems);
  }

  const selectItem = (item: CartItemType) => {
    selectItemWithState(item, true);
  }

  const deselectItem = (item: CartItemType) => {
    selectItemWithState(item, false);
  }

  const setQuantity = (newItem: CartItemType, isAdd: boolean) => {
    if (!newItem.selected)
      return;

    const newQuantity: number = (newItem.quantity || 0) + (isAdd ? 1 : -1);

    if (newQuantity <= 0)
      return;

    const newCartItems = cartItems.map(cartItem =>
      cartItem.id === newItem.id ?
        {
          ...cartItem,
          quantity: newQuantity
        }
        :
        cartItem
    );
    setCartItems(newCartItems);
  }
  const addQuantity = (item: CartItemType) => {
    setQuantity(item, true);
  }
  const subsQuantity = (item: CartItemType) => {
    setQuantity(item, false);
  }

  return {
    cartItems,
    price,
    addItem,
    removeItem,
    selectItem,
    deselectItem,
    addQuantity,
    subsQuantity,
  }
};

export default useCart;


