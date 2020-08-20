import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const addNewJob = createAsyncThunk('job/new', async args => {
  const options = {
    method: 'POST',
    url: 'http://localhost:3000/job_offers',
    withCredentials: true,
    data: args,
  };
  const res = await axios(options);
  return res.data;
});

export default { addNewJob };
