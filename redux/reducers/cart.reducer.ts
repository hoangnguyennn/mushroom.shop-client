import { createSelector, createSlice } from '@reduxjs/toolkit';
import { ICartItem } from '@interfaces/index';
import { ICartState, IRootState } from '@interfaces/IState';
import { isProduct } from '@helpers/checkType';

export const initialState: ICartState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartItem = action.payload as ICartItem;

      const index = state.cartItems.findIndex(item => item.id === cartItem.id);
      if (index !== -1) {
        state.cartItems[index].qty += cartItem.qty;
      } else {
        state.cartItems.push(cartItem);
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    updateCart: state => {
      try {
        let cartItems: ICartItem[] = [];
        const cartItemLocalStorage = localStorage.getItem('cart');
        if (cartItemLocalStorage) {
          const _cartItems = JSON.parse(cartItemLocalStorage);
          if (_cartItems instanceof Array) {
            cartItems = _cartItems.filter(isProduct);
          }
        }

        state.cartItems = cartItems;
      } catch {
        // localStorage cart invalid
      }
    }
  }
});

export const { addToCart, updateCart } = cartSlice.actions;

const cartState = (state: IRootState) => state.cart;
const selector = <T>(combiner: (state: ICartState) => T) => {
  return createSelector(cartState, combiner);
};

export const getCartLength = () =>
  selector(state =>
    state.cartItems.reduce((result, item) => result + item.qty, 0)
  );

export const getCartItems = () => selector(state => state.cartItems);

export default cartSlice.reducer;
