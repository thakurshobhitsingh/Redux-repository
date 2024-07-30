import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputValue: '',
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const { setInputValue } = inputSlice.actions;

const store = configureStore({
  reducer: {
    input: inputSlice.reducer,
  },
});

export default store;