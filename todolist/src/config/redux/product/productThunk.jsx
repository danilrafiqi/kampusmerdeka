import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const retrieveProducts = createAsyncThunk(
  "product/retrieveProducts",
  async (_, { getState }) => {
    const state = getState();
    const res = await axios.get("http://localhost:3000/products", {
      headers: {
        Authorization: `Bearer ${state.session.token}`,
      },
    });
    return res.data;
  }
);

export const retrieveProductById = createAsyncThunk(
  "product/retrieveProductById",
  async (param) => {
    const res = await axios.get(`http://localhost:3000/products/${param.id}`);
    return res.data;
  }
);

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (param) => {
    const res = await axios.post("http://localhost:3000/products", param);
    return res.data;
  }
);

export const updateProductById = createAsyncThunk(
  "product/updateProductById",
  async (param) => {
    const res = await axios.put(
      `http://localhost:3000/products/${param.id}`,
      param
    );
    return res.data;
  }
);

export const deleteProductById = createAsyncThunk(
  "product/deleteProductById",
  async (param) => {
    const res = await axios.delete(
      `http://localhost:3000/products/${param.id}`
    );
    return res.data;
  }
);
