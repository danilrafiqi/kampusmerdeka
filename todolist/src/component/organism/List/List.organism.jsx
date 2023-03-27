import React from "react";
import { ListHeader, ListItem } from "../../molecules";
import "./List.organism.style.css";

const List = ({ no, title, option, data, onDelete, onComplete, onEdit }) => {
  return (
    <div className="list">
      <ListHeader no={no} title={title} option={option} />
      {data.map((item, idx) => {
        return (
          <ListItem
            key={idx}
            no={idx + 1}
            title={item}
            onDelete={onDelete ? () => onDelete(idx) : undefined}
            onComplete={onComplete ? () => onComplete(idx) : undefined}
            onEdit={onEdit ? () => onEdit(item, idx) : undefined}
          />
        );
      })}
    </div>
  );
};

export default List;
