import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InputTodo } from "../../component/molecules/";
import { List } from "../../component/organism";
import { useTodoListSelector } from "../../config/redux/todo/todoSelector";
import { todoAction } from "../../config/redux/todo/todoSlice";
import "./TodoList.style.css";

const TodoList = () => {
  const [text, setText] = useState("");
  const [todoLists, setTodoList] = useState(["Belajar"]);
  const [completedTodoList, setCompletedTodoList] = useState([]);
  const [idxSelected, setIdxSelected] = useState();

  const dispatch = useDispatch();

  const todoList = useTodoListSelector();

  // const todoListNew = useMemo(() => {
  //   return todoList.map((todo) => `${todo}-kampusmerdeka`);
  // }, [todoList]);

  const handleChangeTodo = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(todoAction.add([...todoList, text]));
    setText("");
  };

  const deleteTodoV1 = (idx) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(idx, 1);
    setTodoList(updatedTodoList);
  };

  const handleCompleteTodo = (idx) => {
    setCompletedTodoList([...completedTodoList, todoList[idx]]);
    deleteTodoV1(idx);
  };

  const handleEdit = (value, idx) => {
    setText(value);
    setIdxSelected(idx);
  };

  const handleUpdate = () => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(idxSelected, 1, [text]);
    setTodoList(updatedTodoList);
    setText("");
    setIdxSelected();
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="todolist">
      <div className="todolist__back">
        <button onClick={handleBack}>back</button>
      </div>
      <InputTodo
        onChange={handleChangeTodo}
        onSubmit={handleSubmit}
        onUpdate={handleUpdate}
        value={text}
        isEdit={idxSelected !== undefined}
      />

      <List
        data={todoList}
        no="No"
        title="Title"
        option="Option"
        onComplete={(idx) => {
          handleCompleteTodo(idx);
        }}
        onDelete={(idx) => {
          deleteTodoV1(idx);
        }}
        onEdit={(item, idx) => {
          handleEdit(item, idx);
        }}
      />

      <div>==========================================</div>
      <List data={completedTodoList} no="No" title="Title" option="Option" />
    </div>
  );
};

export default TodoList;
