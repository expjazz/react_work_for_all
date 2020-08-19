import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import curriculumReducer from './reducers/curriculumSlice';

export default configureStore({
  reducer: {
    users: userReducer,
  },
});
