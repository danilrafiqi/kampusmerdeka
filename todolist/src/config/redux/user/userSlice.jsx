import { createSlice } from "@reduxjs/toolkit";
import { retrieveUser } from "./userThunk";

//#region INITIAL STATE
export const initialState = {
  users: [],
  retrieveUserLoading: false,
  retrieveUserError: undefined,
};
//#endregion

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(retrieveUser.pending, (state, action) => {
        return {
          ...state,
          retrieveUserLoading: true,
        };
      })
      .addCase(retrieveUser.fulfilled, (state, action) => {
        return {
          ...state,
          users: action.payload,
          retrieveUserLoading: false,
        };
      })
      .addCase(retrieveUser.rejected, (state, action) => {
        return {
          ...state,
          retrieveUserError: action.payload,
        };
      });
  },
});

export const { actions: userAction, reducer: userReducer } = userSlice;
