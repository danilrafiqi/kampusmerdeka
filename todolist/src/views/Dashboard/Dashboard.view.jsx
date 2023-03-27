import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.style.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div>dashboard page</div>

      <button
        onClick={() => {
          navigate("/dashboard/user");
        }}
      >
        user
      </button>
      <br />
      <button
        onClick={() => {
          navigate("/dashboard/report");
        }}
      >
        report
      </button>
      <Outlet />
    </div>
  );
};

export default Dashboard;
