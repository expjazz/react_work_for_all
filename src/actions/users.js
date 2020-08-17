import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const signUpUser = createAsyncThunk('user/signup', async thunkAPI => {
  const options = {
    method: 'POST',
    url: 'http://localhost:3000/signup',
    withCredentials: true,
    data: {
      user: {
        email: 'thetoke?asdad@gmail.com',
        password: 'foobar',
      },
      candidate: {
        name: 'postman',
      },
    },
  };
  const data = await axios(options);
  return data;
});

export default { signUpUser };
