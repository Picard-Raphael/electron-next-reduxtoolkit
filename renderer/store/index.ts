import { configureStore } from '@reduxjs/toolkit';

import textReducer from './text';
import counterReducer from './counter';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    text: textReducer,
  },
});

export default store;
