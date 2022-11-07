import { configureStore } from "@reduxjs/toolkit";
import {counterSliceReducer} from './counter.slice';
import {counterApi} from "./counter.api";

const store = configureStore({
  reducer: {
    [counterApi.reducerPath]: counterApi.reducer,
    counter: counterSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(counterApi.middleware),
});

export default store;