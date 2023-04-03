import React from "react";
import "./Product.style.css";
import useProductViewModel from "./Product.viewModel";

const Product = () => {
  const viewModel = useProductViewModel();

  return (
    <div className="product">
      <div>Product page</div>

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
          submit data
        </button>
      </div>

      <br />
      {viewModel.products.map((product, idx) => {
        return (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: 200,
            }}
          >
            <div>{product.name}</div>
            <div>{product.price}</div>
          </div>
        );
      })}
      <br />
    </div>
  );
};

export default Product;
