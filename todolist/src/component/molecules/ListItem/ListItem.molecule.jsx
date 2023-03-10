import React from "react";
import "./ListItem.molecule.style.css";

const ListItem = ({ no, title, onDelete }) => {
  return (
    <div className="list-item">
      <div className="list-item__number">{no}</div>
      <div className="list-item__title">{title}</div>
      <div className="list-item__button">
        <button>complete</button>
        <button onClick={onDelete}>delete</button>
      </div>
    </div>
  );
};

export default ListItem;
