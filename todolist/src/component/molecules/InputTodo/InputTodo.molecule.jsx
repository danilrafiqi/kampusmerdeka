import React from "react";
import "./InputTodo.molecule.style.css";

const InputTodo = ({ value, onChange, onSubmit }) => {
  return (
    <div className="input-todo">
      <input
        type="text"
        className="input-todo__field"
        value={value}
        onChange={onChange}
        placeholder="Input todo . . ."
      />
      <button className="input-todo__button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default InputTodo;
