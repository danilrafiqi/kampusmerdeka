import React from "react";
import "./ListHeader.molecule.style.css";

const ListHeader = ({ no, title, option }) => {
  return (
    <div className="list-header">
      <div className="list-header__number">{no}</div>
      <div className="list-header__title">{title}</div>
      <div className="list-header__button">{option}</div>
    </div>
  );
};

export default ListHeader;
