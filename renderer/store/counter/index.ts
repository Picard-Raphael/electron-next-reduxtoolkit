import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/types';

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<null, 'counter/increment'>) => {
      state.value++;
    },
    decrement: (state, action: PayloadAction<null, 'counter/decrement'>) => {
      state.value--;
    },
    incrementByAmount: (
      state,
      action: PayloadAction<number, 'counter/incrementByAmount'>
    ) => {
      state.value += action.payload;
    },
  },
});

// Selectors
export const selectCount = (state: RootState) => state.counter.value;
export const countSelector = createSelector(selectCount, (state) => state);

// Actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice;
