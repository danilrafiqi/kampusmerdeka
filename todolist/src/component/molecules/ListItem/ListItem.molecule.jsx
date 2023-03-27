import React from "react";
import "./ListItem.molecule.style.css";

const ListItem = ({ no, title, onDelete, onComplete, onEdit }) => {
  return (
    <div className="list-item">
      <div className="list-item__number">{no}</div>
      <div className="list-item__title">{title}</div>
      <div className="list-item__button">
        {onComplete && <button onClick={onComplete}>complete</button>}
        {onDelete && <button onClick={onDelete}>delete</button>}
        {onEdit && <button onClick={onEdit}>edit</button>}
      </div>
    </div>
  );
};

export default ListItem;
