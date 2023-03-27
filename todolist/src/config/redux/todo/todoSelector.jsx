import { useSelector } from "react-redux";

export const useTodoListSelector = () =>
  useSelector((state) => state.todo.todoList);
