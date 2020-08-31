import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    positionQuery: '',
  },
  reducers: {
    positionQuery: (state, action) => ({ ...state, positionQuery: action.payload }),
  },
});

export const { positionQuery } = filterSlice.actions;

export default filterSlice.reducer;
