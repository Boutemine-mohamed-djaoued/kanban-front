"use client";

import { configureStore } from "@reduxjs/toolkit";

import userDataReducer from "./features/userData";

// this is the holder of the hole application state
export const store = configureStore({
  reducer: {
    // define the state
    userData: userDataReducer,
  },
});

export type RootState = ReturnType<(typeof store)["getState"]>;
export type AppDispatch = (typeof store)["dispatch"];
