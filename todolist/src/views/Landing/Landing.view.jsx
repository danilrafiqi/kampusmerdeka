import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Landing.style.css";
import useLandingViewModel from "./Landing.viewModel";

const Landing = () => {
  const viewModel = useLandingViewModel();

  return (
    <div className="landing">
      <div>landing page</div>
      <button onClick={viewModel.handleNavigateTodo}>move to todo</button>
      <br />
      <button onClick={viewModel.handleNavigateCreateProduct}>
        move to create product
      </button>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <NavLink to="/login2">Login2</NavLink>
      <br />
      <button onClick={viewModel.handleNavigateProduct}>move to product</button>

      <br />
      <button
        onClick={() => {
          viewModel.handleNavigateProductDetail(1);
        }}
      >
        move to product detail 1
      </button>

      <br />
      <button
        onClick={() => {
          viewModel.handleNavigateProductDetail(2);
        }}
      >
        move to product detail 2
      </button>
      <br />

      <button onClick={viewModel.handleNavigateToDashboard}>dashboard</button>
    </div>
  );
};

export default Landing;
