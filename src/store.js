import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import jobReducer from './reducers/jobOppSlice';
import filterReducer from './reducers/filterSlice';

export default configureStore({
  reducer: {
    users: userReducer,
    jobOffers: jobReducer,
    filters: filterReducer,
  },
});
