import { createSlice } from "@reduxjs/toolkit";

//#region INITIAL STATE
const initialState = {
  todoList: [],
};
//#endregion

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        todoList: action.payload,
      };
    },
  },
});

export const { actions: todoAction, reducer: todoReducer } = todoSlice;
