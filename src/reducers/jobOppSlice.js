/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import jobActions from '../actions/job';

const { addNewJob } = jobActions;

export const jobSlice = createSlice({
  name: 'job',
  initialState: {
    index: [],
    new: {
      status: 'idle',
      job: {},
    },
  },
  reducers: {

  },
  extraReducers: {
    [addNewJob.pending]: state => { state.new.status = 'loading'; },
    [addNewJob.fulfilled]: (state, action) => { state.new.job = action.payload; },

  },
});

export default jobSlice.reducer;
