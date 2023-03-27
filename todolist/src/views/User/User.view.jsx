import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./User.style.css";
const User = () => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate("/todo");
  }, []);

  return (
    <div className="User">
      <div>User page</div>
      <button onClick={handleNavigate}>move to todo</button>
    </div>
  );
};

export default User;
