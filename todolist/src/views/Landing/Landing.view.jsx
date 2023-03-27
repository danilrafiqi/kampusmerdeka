import React, { useCallback } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Landing.style.css";

const Landing = () => {
  const navigate = useNavigate();

  const handleNavigateTodo = useCallback(() => {
    navigate("/todo");
  }, []);

  const handleNavigateCreateProduct = useCallback(() => {
    navigate("/product/create");
  }, []);

  const handleNavigateProduct = useCallback(() => {
    navigate("/product");
  }, []);

  const handleNavigateProductDetail = useCallback((id) => {
    navigate(`/product/${id}`);
  }, []);

  return (
    <div className="landing">
      <div>landing page</div>
      <button onClick={handleNavigateTodo}>move to todo</button>
      <br />
      <button onClick={handleNavigateCreateProduct}>
        move to create product
      </button>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <NavLink to="/login2">Login2</NavLink>
      <br />
      <button onClick={handleNavigateProduct}>move to product</button>

      <br />
      <button
        onClick={() => {
          handleNavigateProductDetail(1);
        }}
      >
        move to product detail 1
      </button>

      <br />
      <button
        onClick={() => {
          handleNavigateProductDetail(2);
        }}
      >
        move to product detail 2
      </button>
      <br />

      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        dashboard
      </button>
    </div>
  );
};

export default Landing;
