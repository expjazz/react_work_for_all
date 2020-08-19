import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const createCurriculum = createAsyncThunk('curriculum/create', async (args, thunkAPI) => {
  console.log(args);
  const options = {
    method: 'POST',
    url: 'http://localhost:3000/curriculums',
    withCredentials: true,
    data: args,
  };

  const data = await axios(options);
  console.log(data);
  return data;
});

export default { createCurriculum };
