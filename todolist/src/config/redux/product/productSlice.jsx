import { createSlice } from "@reduxjs/toolkit";
import { createProduct, retrieveProducts } from "./productThunk";

//#region INITIAL STATE
export const initialState = {
  products: [],
  retrieveProductsLoading: false,
  retrieveProductsError: undefined,

  createProductLoading: false,
  createProductError: undefined,
};
//#endregion

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(retrieveProducts.pending, (state, action) => {
        return {
          ...state,
          retrieveProductsLoading: true,
          retrieveProductsError: undefined,
        };
      })
      .addCase(retrieveProducts.fulfilled, (state, action) => {
        return {
          ...state,
          products: action.payload,
          retrieveProductsLoading: false,
          retrieveProductsError: undefined,
        };
      })
      .addCase(retrieveProducts.rejected, (state, action) => {
        return {
          ...state,
          retrieveProductsLoading: false,
          retrieveProductsError: action.payload,
        };
      })
      //#region CREATE PRODUCT
      .addCase(createProduct.pending, (state, action) => {
        return {
          ...state,
          createProductLoading: true,
          createProductError: undefined,
        };
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        return {
          ...state,
          createProductLoading: false,
          createProductError: undefined,
        };
      })
      .addCase(createProduct.rejected, (state, action) => {
        return {
          ...state,
          createProductLoading: false,
          createProductError: action.payload,
        };
      });
    //#endregion
  },
});

export const { actions: productAction, reducer: productReducer } = productSlice;
