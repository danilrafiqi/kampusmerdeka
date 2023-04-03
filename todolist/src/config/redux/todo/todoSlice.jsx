import { createSlice } from "@reduxjs/toolkit";

//#region INITIAL STATE
export const initialState = {
  todoList: [],
  todoSelected: 10,
  completedTodoList: [],
};
//#endregion

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    //#region todoList
    todoListUpdate: (state, action) => {
      return {
        ...state,
        todoList: action.payload,
      };
    },
    todoListAdd: (state, action) => {
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    },
    todoListDelete: (state, action) => {
      const updatedTodoList = [...state.todoList];
      updatedTodoList.splice(action.payload, 1);
      return {
        ...state,
        todoList: updatedTodoList,
      };
    },
    //#endregion

    //#region completedTodoList
    completedTodoListUpdate: (state, action) => {
      return {
        ...state,
        completedTodoList: action.payload,
      };
    },
    //#endregion
  },
});

export const { actions: todoAction, reducer: todoReducer } = todoSlice;
