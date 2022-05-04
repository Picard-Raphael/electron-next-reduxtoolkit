import { configureStore } from '@reduxjs/toolkit';

import textSlice from './text';
import counterSlice from './counter';

const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
    [textSlice.name]: textSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
