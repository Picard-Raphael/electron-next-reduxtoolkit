import { counterReducer } from './counter/reducer';
import { configureStore } from '@reduxjs/toolkit';
import textReducer from './text';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    text: textReducer,
  },
});

export default store;
