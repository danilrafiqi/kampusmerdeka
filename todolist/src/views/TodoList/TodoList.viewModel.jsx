import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useCompletedTodoListSelector,
  useTodoListSelector,
} from "../../config/redux/todo/todoSelector";
import { todoAction } from "../../config/redux/todo/todoSlice";
const useTodoListViewModel = () => {
  const [text, setText] = useState("");
  const [idxSelected, setIdxSelected] = useState();

  const dispatch = useDispatch();

  const todoList = useTodoListSelector();
  const completedTodoList = useCompletedTodoListSelector();

  const handleChangeTodo = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    // dispatch(todoAction.todoListUpdate([...todoList, text]));
    dispatch(todoAction.todoListAdd(text));
    setText("");
  };

  const deleteTodoV1 = (idx) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(idx, 1);
    dispatch(todoAction.todoListUpdate(updatedTodoList));
    // dispatch(todoAction.todoListDelete(idx));
  };

  const handleCompleteTodo = (idx) => {
    dispatch(
      todoAction.completedTodoListUpdate([...completedTodoList, todoList[idx]])
    );
    deleteTodoV1(idx);
  };

  const handleEdit = (value, idx) => {
    setText(value);
    setIdxSelected(idx);
  };

  const handleUpdate = () => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(idxSelected, 1, [text]);
    dispatch(todoAction.todoListUpdate(updatedTodoList));
    setText("");
    setIdxSelected();
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return {
    // data
    todoList,
    text,
    idxSelected,
    completedTodoList,
    // handler
    handleBack,
    handleUpdate,
    handleEdit,
    handleCompleteTodo,
    handleSubmit,
    handleChangeTodo,
    deleteTodoV1,
  };
};

export default useTodoListViewModel;
