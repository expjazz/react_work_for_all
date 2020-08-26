import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const addAllJobs = createAsyncThunk('/job/index', async () => {
  const options = {
    method: 'GET',
    url: 'https://whispering-stream-10328.herokuapp.com/job_offers',
    withCredentials: true,

  };

  const res = await axios(options);
  return res.data;
});

// const updateJobStatus = createAsyncThunk('user/updateJobStatus', async thunkAPI => {
//   const options = {
//     method: 'GET',
//     url: 'https://whispering-stream-10328.herokuapp.com/newJobInfo',
//     withCredentials: true,
//   };
//   const data = await axios(options);
//   return data.data;
// });

const candidateApplyForJob = createAsyncThunk('/job/candidateApplyForJob', async (args, thunkAPI) => {
  const options = {
    method: 'POST',
    url: 'https://whispering-stream-10328.herokuapp.com/applyjobs',
    withCredentials: true,
    data: args,
  };
  const res = await axios(options);
  thunkAPI.dispatch(addAllJobs());
  return res.data;
});

const acceptCandidate = createAsyncThunk('job/companyAccept', async args => {
  const options = {
    method: 'POST',
    url: 'https://whispering-stream-10328.herokuapp.com/acceptcandidates',
    withCredentials: true,
    data: args,
  };
  const res = await axios(options);
  return res.data;
});

export default {
  addAllJobs, candidateApplyForJob, acceptCandidate,
};
