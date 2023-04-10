import React from "react";
import "./ProductDetail.style.css";
import useProductDetailViewModel from "./ProductDetail.viewModel";
const ProductDetail = () => {
  const viewModel = useProductDetailViewModel();

  return (
    <div className="product-detail">
      <div>ProductId {viewModel.params.id}</div>

      <div>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={viewModel.formik.values.name}
          onChange={viewModel.formik.handleChange}
        />
        <br />
        <input
          type="number"
          name="price"
          placeholder="price"
          value={viewModel.formik.values.price}
          onChange={viewModel.formik.handleChange}
        />
        <button type="submit" onClick={viewModel.formik.handleSubmit}>
          update
        </button>
      </div>

      <button onClick={viewModel.handleNavigate}>move to todo</button>
    </div>
  );
};

export default ProductDetail;
