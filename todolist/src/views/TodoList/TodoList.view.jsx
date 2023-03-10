import React, { useState } from "react";
import { InputTodo, ListHeader, ListItem } from "../../component/molecules/";
import "./TodoList.style.css";

const TodoList = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState(["Belajar"]);

  const handleChangeTodo = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    setTodoList([...todoList, text]);
    setText("");
  };

  const deleteTodoV1 = (idx) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(idx, 1);
    setTodoList(updatedTodoList);
  };

  // const deleteTodoV2 = (search) => {
  //   const filteredList = todoList.filter((todo) => todo !== search);
  //   setTodoList(filteredList);
  // };

  return (
    <div className="todolist">
      <InputTodo
        onChange={handleChangeTodo}
        onSubmit={handleSubmit}
        value={text}
      />

      <div className="todolist__content">
        <ListHeader no="No" title="Title" option="Option" />
        {todoList.map((todo, idx) => {
          return (
            <ListItem
              key={idx}
              no={idx + 1}
              title={todo}
              onDelete={() => {
                deleteTodoV1(idx);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
