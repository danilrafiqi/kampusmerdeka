import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Report.style.css";
const Report = () => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate("/todo");
  }, []);

  return (
    <div className="Report">
      <div>Report page</div>
      <button onClick={handleNavigate}>move to todo</button>
    </div>
  );
};

export default Report;
