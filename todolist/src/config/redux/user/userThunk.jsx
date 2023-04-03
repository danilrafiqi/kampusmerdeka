import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const retrieveUser = createAsyncThunk("user/retrieveUser", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
});
