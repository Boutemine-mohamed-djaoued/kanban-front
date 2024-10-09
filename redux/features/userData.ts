"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface userDataType {
  boards: boardType[];
  chosenBoard: number;
  refetch: () => void;
}

const initialState: userDataType = {
  boards: [],
  chosenBoard: 0,
  refetch: () => {},
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
    setRefetch: (state, action) => {
      state.refetch = action.payload;
    },
  },
});

export const { setBoards, setChosenBoard, setRefetch } = counterSlice.actions;

export default counterSlice.reducer;
