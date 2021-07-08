import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';

import { ICartState, IRootState } from '@interfaces/IState';
import { IOrder } from '@interfaces/index';
import { isProductInCart } from '@helpers/checkTypes';
import { orderApi } from '@apis/common';

export const initialState: ICartState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const indexInCart = state.cartItems.findIndex(
        cartItem => action.payload.id === cartItem.id
      );

      if (indexInCart === -1) {
        state.cartItems = [...state.cartItems, action.payload];
      } else {
        state.cartItems = [
          ...state.cartItems.slice(0, indexInCart),
          {
            ...state.cartItems[indexInCart],
            qty: state.cartItems[indexInCart].qty + action.payload.qty
          },
          ...state.cartItems.slice(indexInCart + 1)
        ];
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const indexInCart = state.cartItems.findIndex(
        cartItem => action.payload.id === cartItem.id
      );

      if (indexInCart !== -1) {
        state.cartItems = [
          ...state.cartItems.slice(0, indexInCart),
          ...state.cartItems.slice(indexInCart + 1)
        ];

        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      }
    },
    updateCartFromLocalStorage(state) {
      let cartItems = [];
      if (typeof window !== 'undefined') {
        if (localStorage.getItem('cart')) {
          const _cart = JSON.parse(localStorage.getItem('cart'));
          if (_cart instanceof Array) {
            cartItems = _cart.filter(isProductInCart);
          }
        }
      }
      state.cartItems = cartItems;
    },
    updateQty(state, action) {
      const indexInCart = state.cartItems.findIndex(
        cartItem => action.payload.id === cartItem.id
      );

      if (indexInCart === -1) {
        state.cartItems = [...state.cartItems, action.payload];
      } else {
        state.cartItems = [
          ...state.cartItems.slice(0, indexInCart),
          {
            ...state.cartItems[indexInCart],
            qty: action.payload.qty
          },
          ...state.cartItems.slice(indexInCart + 1)
        ];
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    clearCart(state) {
      state.cartItems = [];
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    }
  }
});

export const {
  addToCart,
  clearCart,
  removeFromCart,
  updateCartFromLocalStorage,
  updateQty
} = cartSlice.actions;

export const order = (orderRequest: IOrder) => async (dispatch: Dispatch) => {
  return orderApi(orderRequest).then(() => {
    setTimeout(() => dispatch(clearCart()), 1000);
  });
};

const cartState = (state: IRootState) => state.cart;
const selector = function <T>(combiner: { (state: ICartState): T }) {
  return createSelector(cartState, combiner);
};

export const getCartItems = () => selector(state => state.cartItems);
export const getCartLength = () =>
  selector(state => {
    return state.cartItems.reduce((result, item) => {
      return result + item.qty;
    }, 0);
  });

export const getCartSubtotal = () =>
  selector(state => {
    return state.cartItems.reduce((result, item) => {
      return result + item.price * item.qty;
    }, 0);
  });

export const getDeliveryFee = 0;

export default cartSlice.reducer;
