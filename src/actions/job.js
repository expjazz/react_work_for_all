import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import userActions from './users';

const addNewJob = createAsyncThunk('job/new', async (args, thunkAPI) => {
  const { checkLoggedUser } = userActions;
  const options = {
    method: 'POST',
    url: 'http://localhost:3000/job_offers',
    withCredentials: true,
    data: args,
  };
  const res = await axios(options);
  thunkAPI.dispatch(checkLoggedUser());
  return res.data;
});

const addAllJobs = createAsyncThunk('/job/index', async args => {
  const options = {
    method: 'GET',
    url: 'http://localhost:3000/job_offers',
    withCredentials: true,

  };

  const res = await axios(options);
  return res.data;
});

const candidateApplyForJob = createAsyncThunk('/job/candidateApplyForJob', async args => {
  const options = {
    method: 'POST',
    url: 'http://localhost:3000/applyjobs',
    withCredentials: true,
    data: args,
  };
  const res = await axios(options);
  return res.data;
});

const acceptCandidate = createAsyncThunk('job/companyAccept', async args => {
  const options = {
    method: 'POST',
    url: 'http://localhost:3000/acceptcandidates',
    withCredentials: true,
    data: args,
  };
  const res = await axios(options);
  return res.data;
});

export default {
  addNewJob, addAllJobs, candidateApplyForJob, acceptCandidate,
};
