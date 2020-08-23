/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import curriculumActions from '../actions/curriculum';

const { createCurriculum, updateCurriculum } = curriculumActions;

export const curriculumSlice = createSlice({
  name: 'curriculum',
  initialState: {
    current: {},
    status: 'idle',
  },
  reducers: {},
  extraReducers: {
    [createCurriculum.pending]: (state, action) => { state.status = 'loading'; },
    [createCurriculum.fulfilled]: (state, action) => ({ ...state, status: 'fullfiled', current: action.payload }),

    [updateCurriculum.pending]: (state, action) => { state.status = 'loading'; },
    [updateCurriculum.fulfilled]: (state, action) => ({ ...state, status: 'fullfiled', current: action.payload }),

  },
});

export const { createCurrAction } = curriculumSlice.actions;

export default curriculumSlice.reducer;
