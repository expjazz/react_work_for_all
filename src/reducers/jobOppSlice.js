/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import jobActions from '../actions/job';

const {
  addAllJobs, candidateApplyForJob, acceptCandidate,
} = jobActions;

export const jobSlice = createSlice({
  name: 'job',
  initialState: {
    index: { all: [], status: 'idle' },
    new: {
      status: 'idle',
      job: {},
    },
  },
  reducers: {

  },
  extraReducers: {

    [addAllJobs.pending]: state => { state.index.status = 'loading'; },
    [addAllJobs.fulfilled]: (state, action) => { state.index.all = action.payload; },
    [candidateApplyForJob.pending]: state => { state.index.status = 'loading'; },
    [candidateApplyForJob.fulfilled]: (state, action) => { state.jobApplied = action.payload; },

    [acceptCandidate.pending]: state => { state.index.status = 'loading'; },
    [acceptCandidate.fulfilled]: (state, action) => { state.jobAccepted = action.payload; },

  },
});

export default jobSlice.reducer;
