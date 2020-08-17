/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
  },
  reducers: {
    signUp: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { signUp } = userSlice.actions;

export default userSlice.reducer;
