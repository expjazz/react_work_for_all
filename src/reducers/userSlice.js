/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import signUpUser from '../actions/users';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    status: 'idle',
  },
  reducers: {

  },
  extraReducers: {
    [signUpUser.signUpUser.pending]: (state, action) => { state.status = 'loading'; },

    [signUpUser.signUpUser.fulfilled]: (state, action) => ({ ...state, current: action.payload }),
  },
});

export const { signUp } = userSlice.actions;

export default userSlice.reducer;
