import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchPizza, RootState } from '../store';

export type searchPizzaType = {
  filter: string;
  sortOrder: string;
  sortBy: string;
  searchBy: string;
  page: string;
};

export const fetchPizzas = createAsyncThunk<fetchPizza[], searchPizzaType>(
  'pizza/fetchPizzaStatus',
  async (params) => {
    const { page, searchBy, filter, sortBy, sortOrder } = params;
    const { data } = await axios.get<fetchPizza[]>(
      `https://6374f95948dfab73a4ee9da4.mockapi.io/items?${page}${searchBy}${filter}&sortBy=${sortBy}&order=${sortOrder}`,
    );
    return data;
  },
);
interface fetchSliceState {
  items: fetchPizza[];
  status: 'loading' | 'success' | 'error';
}
const initialState: fetchSliceState = {
  items: [],
  status: 'loading',
};

export const fetchSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (PizzaBuilder) => {
    PizzaBuilder.addCase(fetchPizzas.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    });
    PizzaBuilder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    });
    PizzaBuilder.addCase(fetchPizzas.rejected, (state) => {
      state.status = 'error';
      state.items = [];
      console.log('Произошла ошибка');
    });
  },
});
export const selectItemById = (id: string) => (state: RootState) =>
  state.pizza.items.find((obj) => obj.id === id);

export const selectPizza = (state: RootState) => state.pizza;

export const { addItem } = fetchSlice.actions;

export default fetchSlice.reducer;
