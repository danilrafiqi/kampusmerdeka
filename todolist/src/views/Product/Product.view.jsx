import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Product.style.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [text, setText] = useState("");

  const inputRef = useRef();

  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate("/todo");
  }, []);

  const handleAdd = () => {
    setProducts((prev) => {
      const newProducts = [...prev, text];
      localStorage.setItem("products", JSON.stringify(newProducts));
      return newProducts;
    });
  };

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")));
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="product">
      <div>Product page</div>

      <input
        ref={inputRef}
        type="text"
        name=""
        id=""
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <button onClick={handleAdd}>add</button>
      <br />
      {products.map((product, idx) => {
        return <div key={idx}>{product}</div>;
      })}
      <br />

      <button onClick={handleNavigate}>move to todo</button>
    </div>
  );
};

export default Product;
