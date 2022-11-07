import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    number: 1,
  },
  reducers: {
    plusOne(state) {
      state.number += 1
    },
    minusOne(state) {
      state.number -= 1
    }
  }
})

export const { plusOne, minusOne } = counterSlice.actions;
export const counterSliceReducer = counterSlice.reducer

