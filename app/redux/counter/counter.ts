import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialCount = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCount,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmout: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmout } = counterSlice.actions;

export default counterSlice.reducer;
