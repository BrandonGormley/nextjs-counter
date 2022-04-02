import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  message: '',
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    minus(state) {
      state.count--;
      state.message = 'Count Subtracted';
    },
    reset(state) {
      state.count = 0;
      state.message = 'Count Reset to 0';
    },
    plus(state) {
      state.count++;
      state.message = 'Count Added';
    },
    closeMessage(state) {
      state.message = ``;
    },
  },
});

export const { minus, reset, plus, closeMessage } = counterSlice.actions;

export default counterSlice.reducer;
