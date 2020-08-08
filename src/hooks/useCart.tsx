import { useRecoilState } from 'recoil';
import { cartItemsState } from '../stores/cart';

export const MAX_ITEM_COUNT = 3;

const useCart = () => {
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);

  const addItem = (item:ProductType) => {
    if(cartItems.length >= MAX_ITEM_COUNT) {
      //TODO: error handling
      return;
    }

    const newCartItems = [
      ...cartItems,
      item
    ];

    setCartItems(newCartItems);
  }
  const removeItem = (item:ProductType) => {
    setCartItems(cartItems.filter(t => t.id !== item.id));
  }

  return { cartItems, addItem, removeItem }
};

export default useCart;


