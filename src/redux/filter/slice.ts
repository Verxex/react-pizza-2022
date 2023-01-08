import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { filterSliceState, sortIndexType } from './types';

const initialState: filterSliceState = {
  pageNumber: 1,
  categoriesIndex: 0,
  sortIndex: {
    name: 'популярности',
    sortBy: 'rating',
  },
  direction: true,
  findStr: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryIndex: (state, action: PayloadAction<number>) => {
      state.categoriesIndex = action.payload;
    },
    setSort: (state, action: PayloadAction<sortIndexType>) => {
      state.sortIndex = action.payload;
    },
    setDirection: (state, action: PayloadAction<boolean>) => {
      state.direction = action.payload;
    },
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
    setFindStr: (state, action: PayloadAction<string>) => {
      state.findStr = action.payload;
    },

    setFilter: (state, action: PayloadAction<filterSliceState>) => {
      state.pageNumber = Number(action.payload.pageNumber);
      state.sortIndex = action.payload.sortIndex;
      state.direction = action.payload.direction;
      state.categoriesIndex = Number(action.payload.categoriesIndex);
      state.findStr = action.payload.findStr;
    },
  },
});

export const { setCategoryIndex, setSort, setDirection, setPageNumber, setFilter, setFindStr } =
  filterSlice.actions;

export default filterSlice.reducer;
