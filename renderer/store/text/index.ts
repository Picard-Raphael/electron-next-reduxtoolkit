import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TextState = {
  text: string;
};

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

export default textSlice;
