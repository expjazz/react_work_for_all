/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import usersActions from '../actions/users';

const { signUpUser, checkLoggedUser } = usersActions;
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    status: 'idlee',
  },
  reducers: {

  },
  extraReducers: {
    [signUpUser.pending]: (state, action) => { state.status = 'loading'; },

    [signUpUser.fulfilled]: (state, action) => ({ ...state, status: 'fullfiled', current: action.payload }),

    [checkLoggedUser.pending]: (state, action) => { state.status = 'loading'; },

    [checkLoggedUser.fulfilled]: (state, action) => ({ ...state, status: 'fullfiled', current: action.payload }),
  },
});

export const { signUp } = userSlice.actions;

export default userSlice.reducer;
