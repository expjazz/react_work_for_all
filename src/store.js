import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import jobReducer from './reducers/jobOppSlice';

export default configureStore({
  reducer: {
    users: userReducer,
    jobOffers: jobReducer,
  },
});
