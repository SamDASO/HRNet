import { configureStore } from '@reduxjs/toolkit';
import birthdayReducer from './birthday';
import startDayReducer from './startDay';
import nameReducer from './name'

const store = configureStore({
  reducer: {
    birthday: birthdayReducer,
    startDay: startDayReducer,
    name: nameReducer,
  },
});


export default store;