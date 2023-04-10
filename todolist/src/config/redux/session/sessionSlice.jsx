import { createSlice } from "@reduxjs/toolkit";
import { login } from "./sessionThunk";

//#region INITIAL STATE
export const initialState = {
  token: "",
};
//#endregion

const sessionSlice = createSlice({
  name: "session",
  initialState: initialState,
  reducers: {
    tokenUpdate: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        return {
          ...state,
          loginLoading: true,
          loginError: undefined,
          type: action.type,
        };
      })
      .addCase(login.fulfilled, (state, action) => {
        return {
          ...state,
          token: action.payload.accessToken,
          loginLoading: false,
          loginError: undefined,
          type: action.type,
        };
      })
      .addCase(login.rejected, (state, action) => {
        return {
          ...state,
          loginLoading: false,
          loginError: action.payload,
          type: action.type,
        };
      });
  },
});

export const { actions: sessionAction, reducer: sessionReducer } = sessionSlice;
