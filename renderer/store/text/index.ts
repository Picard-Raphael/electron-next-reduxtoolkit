import { useActions } from './../hooks';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TextAction, TextState } from './text.type';

const initialState: TextState = {
  text: 'Change text',
};

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    changeText: (state, action: PayloadAction<string, 'text/change'>) => {
      state.text = action.payload;
    },
  },
});
export const { changeText } = textSlice.actions;

export const useActionsText = (): TextAction =>
  useActions({ ...textSlice.actions });
export default textSlice;
