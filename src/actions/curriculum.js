import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import usersActions from './users';

const createCurriculum = createAsyncThunk('curriculum/create', async args => {
  console.log(args);
  const options = {
    method: 'POST',
    url: 'http://localhost:3000/curriculums',
    withCredentials: true,
    data: args,
  };

  const data = await axios(options);
  return data.data;
});

const updateCurriculum = createAsyncThunk('curriculum/update', async (args, thunksAPI) => {
  const { checkLoggedUser } = usersActions;

  const options = {
    method: 'PATCH',
    url: 'http://localhost:3000/curriculums',
    withCredentials: true,
    data: args,
  };
  thunksAPI.dispatch(checkLoggedUser());
  const { data } = await axios(options);
  return data;
});

export default { createCurriculum, updateCurriculum };
