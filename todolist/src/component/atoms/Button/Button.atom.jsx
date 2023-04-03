import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: 8, borderRadius: 8 }}>
      {children}
    </button>
  );
};

export default Button;
