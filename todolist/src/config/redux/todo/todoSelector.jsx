import { useSelector } from "react-redux";

export const useTodoListSelector = () =>
  useSelector((state) => state.todo.todoList);

export const useCompletedTodoListSelector = () =>
  useSelector((state) => state.todo.completedTodoList);
