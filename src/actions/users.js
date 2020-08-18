import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const signUpUser = createAsyncThunk('user/signup', async thunkAPI => {
  const options = {
    method: 'POST',
    url: 'http://localhost:3000/signup',
    withCredentials: true,
    data: {
      user: {
        email: 'rickss@gmail.com',
        password: 'foobar',
      },
      admin: {
        name: 'Rick Sanchez',
      },
    },
  };
  const data = await axios(options);
  return data;
});

const checkLoggedUser = createAsyncThunk('user/checkloggeduser', async thunkAPI => {
  const options = {

    method: 'GET',
    url: 'http://localhost:3000/loggeduser',
    withCredentials: true,

  };

  const data = await axios(options);
  console.log(data.data);
  return data.data;
});

export default { signUpUser, checkLoggedUser };
