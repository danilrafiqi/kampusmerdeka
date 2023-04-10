import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("session/login", async (param) => {
  const res = await axios.post("http://localhost:3000/login", param);
  return res.data;
});
