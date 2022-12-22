import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalCoast } from '../../utils/calcTotalCoast';
import { getCartItemsFromLS } from '../../utils/getCartItemsFromLS';
import { cartPizza, customPizza, RootState } from '../store';

interface cartSliceState {
  totalPrice: number;
  items: cartPizza[];
}
const LocalData = getCartItemsFromLS();
const items = LocalData ? LocalData.items : [];
const totalPrice = LocalData ? LocalData.totalCoast : 0;

const initialState: cartSliceState = {
  totalPrice,
  items,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<customPizza>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id) as cartPizza;
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = calcTotalCoast(state.items);
    },
    delItem: (state, action: PayloadAction<string>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload) as cartPizza;
      if (findItem) {
        if (findItem.count > 1) {
          findItem.count--;
        } else {
          state.items = state.items.filter((obj) => obj.id !== action.payload);
        }
        state.totalPrice = calcTotalCoast(state.items);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalCoast(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);

export const { addItem, delItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
