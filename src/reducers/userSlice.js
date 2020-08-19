/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import usersActions from '../actions/users';
import curriculumActions from '../actions/curriculum';

const { createCurriculum } = curriculumActions;
const { signUpUser, checkLoggedUser } = usersActions;
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: '',
    status: 'idlee',
    curriculum: {},
  },
  reducers: {

  },
  extraReducers: {
    [signUpUser.pending]: (state, action) => { state.status = 'loading'; },

    [signUpUser.fulfilled]: (state, action) => ({ ...state, status: 'fullfiled', current: action.payload }),

    [checkLoggedUser.pending]: (state, action) => { state.status = 'loading'; },

    [checkLoggedUser.fulfilled]: (state, action) => ({ ...state, status: 'fullfiled', currentUser: { user: action.payload.user, curriculum: action.payload.curriculum } }),

    [createCurriculum.pending]: (state, action) => { state.status = 'loading'; },
    [createCurriculum.fulfilled]: (state, action) => ({ ...state, status: 'fullfiled', curriculum: action.payload }),
  },
});

export const { signUp } = userSlice.actions;

export default userSlice.reducer;
