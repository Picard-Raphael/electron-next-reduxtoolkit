import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

type TextState = {
  text: string;
};

const initialState = {
  text: 'Change text',
} as TextState;

// Peut être exporté
const change: CaseReducer<TextState, PayloadAction<string>> = (
  state,
  action
) => {
  state.text = action.payload;
};

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    changeText: change,
    //V2 changeText: (state, action: PayloadAction<string, 'text/change>) => { state.text = action.payload }
  },
});
export const { changeText } = textSlice.actions;

export default textSlice.reducer;
