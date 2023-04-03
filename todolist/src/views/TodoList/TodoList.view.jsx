import React from "react";
import { InputTodo } from "../../component/molecules/";
import { List } from "../../component/organism";
import "./TodoList.style.css";
import useTodoListViewModel from "./TodoList.viewModel";

const TodoList = () => {
  const viewModel = useTodoListViewModel();

  return (
    <div className="todolist">
      <div className="todolist__back">
        <button onClick={viewModel.handleBack}>back</button>
      </div>
      <InputTodo
        onChange={viewModel.handleChangeTodo}
        onSubmit={viewModel.handleSubmit}
        onUpdate={viewModel.handleUpdate}
        value={viewModel.text}
        isEdit={viewModel.idxSelected !== undefined}
      />

      <List
        data={viewModel.todoList}
        no="No"
        title="Title"
        option="Option"
        onComplete={(idx) => {
          viewModel.handleCompleteTodo(idx);
        }}
        onDelete={(idx) => {
          viewModel.deleteTodoV1(idx);
        }}
        onEdit={(item, idx) => {
          viewModel.handleEdit(item, idx);
        }}
      />

      <div>==========================================</div>
      <List
        data={viewModel.completedTodoList}
        no="No"
        title="Title"
        option="Option"
      />
    </div>
  );
};

export default TodoList;
