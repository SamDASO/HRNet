import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profile'

const store = configureStore({
  reducer: {
    userProfile: profileReducer,
  },
});


export default store;