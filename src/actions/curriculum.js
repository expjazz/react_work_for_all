import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import usersActions from './users';

const createCurriculum = createAsyncThunk('curriculum/create', async args => {
  const options = {
    method: 'POST',
    url: 'https://whispering-stream-10328.herokuapp.com/curriculums',
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
    url: 'https://whispering-stream-10328.herokuapp.com/curriculums',
    withCredentials: true,
    data: args,
  };
  thunksAPI.dispatch(checkLoggedUser());
  const { data } = await axios(options);
  return data;
});

export default { createCurriculum, updateCurriculum };
