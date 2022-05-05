import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useActions } from '../hooks';
import { CounterAction, CounterState } from './counter.type';
import { RootState } from '..';

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

// Memoized selector
export const countSelector = createSelector(selectCount, (value) => value);

// Actions
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const useActionsCounter = (): CounterAction =>
  useActions({ ...counterSlice.actions });

export default counterSlice;
