import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const retrieveProducts = createAsyncThunk(
  "user/retrieveProducts",
  async () => {
    const res = await axios.get("http://localhost:3000/products");
    return res.data;
  }
);

export const createProduct = createAsyncThunk(
  "user/createProduct",
  async (param) => {
    const res = await axios.post("http://localhost:3000/products", param);
    return res.data;
  }
);
