import React from "react";
import "./InputTodo.molecule.style.css";

const InputTodo = ({ value, onChange, onSubmit, isEdit, onUpdate }) => {
  return (
    <div className="input-todo">
      <input
        type="text"
        className="input-todo__field"
        value={value}
        onChange={onChange}
        placeholder="Input todo . . ."
      />

      {/* condition ? true : false */}
      <button
        className="input-todo__button"
        onClick={isEdit ? onUpdate : onSubmit}
      >
        {isEdit ? "Update" : "Submit"}
      </button>
    </div>
  );
};

export default InputTodo;
