"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface userDataType {
  boards: boardType[];
  chosenBoard: number;
}

const initialState: userDataType = {
  boards: [],
  chosenBoard: 0,
};

// creating a slice
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // setting the actions available
  reducers: {
    setBoards: (state, action) => {
      state.boards = action.payload;
    },
    setChosenBoard: (state, action) => {
      state.chosenBoard = action.payload;
    },
  },
});

export const { setBoards, setChosenBoard } = counterSlice.actions;

export default counterSlice.reducer;
