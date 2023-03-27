import React, { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetail.style.css";
const ProductDetail = () => {
  const navigate = useNavigate();
  const params = useParams();

  const handleNavigate = useCallback(() => {
    navigate("/todo");
  }, []);

  return (
    <div className="product-detail">
      <div>ProductDetail page {params.id}</div>
      <button onClick={handleNavigate}>move to todo</button>
    </div>
  );
};

export default ProductDetail;
