import { configureStore } from '@reduxjs/toolkit';

import textSlice from './text';
import counterSlice from './counter';

const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
    [textSlice.name]: textSlice.reducer,
  },
});

export default store;
