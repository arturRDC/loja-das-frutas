import { CART_ADD_ITEM } from '../constants/cartConstants';

import React from 'react';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existentItem = state.cartItems.find(
        (x) => x.product === item.product
      );

      if (existentItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existentItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    default:
      return state;
  }
};
