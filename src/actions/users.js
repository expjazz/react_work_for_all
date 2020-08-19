import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const signUpUser = createAsyncThunk('user/signup', async (args, thunkAPI) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:3000/signup',
    withCredentials: true,
    data: args,
  };
  const data = await axios(options);
  return data;
});

const signUpUserCompany = createAsyncThunk('user/signupcompany', async (args, thunkAPI) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:3000/company_details',
    withCredentials: true,
    data: args,
  };
  const res = await axios(options);
  const { data } = res;
  return data;
});

const checkLoggedUser = createAsyncThunk('user/checkloggeduser', async thunkAPI => {
  const options = {

    method: 'GET',
    url: 'http://localhost:3000/loggeduser',
    withCredentials: true,

  };

  const data = await axios(options);
  return data.data;
});

export default { signUpUser, checkLoggedUser, signUpUserCompany };
