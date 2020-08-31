import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import jobActions from './job';

const signUpUser = createAsyncThunk('user/signup', async (args, thunkAPI) => {
  const options = {
    method: 'POST',
    url: 'https://whispering-stream-10328.herokuapp.com/signup',
    withCredentials: true,
    data: args,
  };
  const { addAllJobs } = jobActions;
  const data = await axios(options);

  thunkAPI.dispatch(addAllJobs());
  return data.data;
});

const loginUser = createAsyncThunk('user/login', async (args, thunkAPI) => {
  const options = {
    method: 'POST',
    url: 'https://whispering-stream-10328.herokuapp.com/login',
    withCredentials: true,
    data: args,
  };
  const res = await axios(options);
  const { data } = res;
  const { addAllJobs } = jobActions;

  thunkAPI.dispatch(addAllJobs());

  return data;
});

const signUpUserCompany = createAsyncThunk('user/signupcompany', async args => {
  const options = {
    method: 'POST',
    url: 'https://whispering-stream-10328.herokuapp.com/company_details',
    withCredentials: true,
    data: args,
  };
  const res = await axios(options);
  const { data } = res;
  return data;
});

const checkLoggedUser = createAsyncThunk('user/checkloggeduser', async () => {
  const options = {

    method: 'GET',
    url: 'https://whispering-stream-10328.herokuapp.com/loggeduser',
    withCredentials: true,

  };

  const data = await axios(options);
  return data.data;
});

const addNewJob = createAsyncThunk('user/job/new', async args => {
  const options = {
    method: 'POST',
    url: 'https://whispering-stream-10328.herokuapp.com/job_offers',
    withCredentials: true,
    data: args,
  };
  const res = await axios(options);
  // thunkAPI.dispatch(checkLoggedUser());
  return res.data;
});

const setUpInterviewCandidate = createAsyncThunk('user/candidate/interview', async args => {
  const options = {
    method: 'POST',
    url: 'https://whispering-stream-10328.herokuapp.com/interviews/create',
    withCredentials: true,
    data: args,
  };
  const { data } = await axios(options);
  return data;
});

const updateInterviewStatus = createAsyncThunk('user/company/interview', async args => {
  const options = {
    method: 'PATCH',
    url: 'https://whispering-stream-10328.herokuapp.com/interviews/update',
    withCredentials: true,
    data: args,
  };
  const { data } = await axios(options);
  return data;
});

const signOut = createAsyncThunk('user/signout', async () => {
  const options = {
    method: 'DELETE',
    url: 'https://whispering-stream-10328.herokuapp.com/signout',
    withCredentials: true,
  };

  axios(options);

  return '';
});

const updateCompanyInfo = createAsyncThunk('user/company/update', async args => {
  const options = {
    method: 'PATCH',
    url: 'https://whispering-stream-10328.herokuapp.com/companyinfo',
    withCredentials: true,
    data: args,
  };

  const { data } = await axios(options);
  return data;
});

export default {
  signUpUser,
  checkLoggedUser,
  signUpUserCompany,
  loginUser,
  addNewJob,
  setUpInterviewCandidate,
  updateInterviewStatus,
  signOut,
  updateCompanyInfo,
};
