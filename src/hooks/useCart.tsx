import { useRecoilState } from 'recoil';
import { cartItemsState } from '../stores/cart';
import { useEffect } from 'react';
import { priceState, discountedPriceState } from '../stores/price';
import useCoupon from './useCoupon';
import { partition, calcItemsPrice } from '../utils';

export const MAX_ITEM_COUNT = 3;
export const MIN_QUANTITY = 1;


const useCart = () => {
  const [cartItems, setCartItems] = useRecoilState<CartItemType[]>(cartItemsState);
  const [price, setPrice] = useRecoilState<number>(priceState);
  const [discountedPrice, setDiscountedPrice] = useRecoilState<number>(discountedPriceState);
  const { selectedCoupon } = useCoupon();

  useEffect(() => {
    const selectedItems: CartItemType[] = cartItems.filter(t => t.selected);
    const filteredItems = partition(selectedItems, (e) => e.availableCoupon !== false);
    let availablePrice = calcItemsPrice(filteredItems.pass);   // discountable
    const unavailablePrice =  calcItemsPrice(filteredItems.fail);  // not discountable
    setPrice(Math.floor(availablePrice + unavailablePrice));

    // set price for coupon type
    if (selectedCoupon) {
      if (selectedCoupon.type === 'rate') {
        availablePrice *= (100 - (selectedCoupon.discountRate || 0)) / 100;
      } else if (selectedCoupon.type === 'amount') {
        availablePrice -= selectedCoupon.discountAmount || 0;
      }
    }

    setDiscountedPrice(Math.max(Math.floor(availablePrice + unavailablePrice), 0));
  }, [cartItems, setPrice, selectedCoupon, setDiscountedPrice])

  const addItem = (item: CartItemType) => {
    if (cartItems.length >= MAX_ITEM_COUNT) {
      //TODO: error handling
      return;
    }

    setCartItems([
      ...cartItems,
      {
        ...item,
        quantity: MIN_QUANTITY,
        selected: true
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
    discountedPrice,
    addItem,
    removeItem,
    selectItem,
    deselectItem,
    addQuantity,
    subsQuantity,
  }
};

export default useCart;
