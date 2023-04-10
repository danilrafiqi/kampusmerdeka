import { createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProductById,
  retrieveProductById,
  retrieveProducts,
  updateProductById,
} from "./productThunk";

//#region INITIAL STATE
export const initialState = {
  products: [],
  productDetail: {},
  retrieveProductsLoading: false,
  retrieveProductsError: undefined,

  createProductLoading: false,
  createProductError: undefined,

  deleteProductByIdLoading: false,
  deleteProductByIdError: undefined,

  retrieveProductByIdLoading: false,
  retrieveProductByIdError: undefined,

  updateProductByIdLoading: false,
  updateProductByIdError: undefined,
  type: "",
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
          type: action.type,
        };
      })
      .addCase(retrieveProducts.fulfilled, (state, action) => {
        return {
          ...state,
          products: action.payload,
          retrieveProductsLoading: false,
          retrieveProductsError: undefined,
          type: action.type,
        };
      })
      .addCase(retrieveProducts.rejected, (state, action) => {
        return {
          ...state,
          retrieveProductsLoading: false,
          retrieveProductsError: action.payload,
          type: action.type,
        };
      })
      //#region CREATE PRODUCT
      .addCase(createProduct.pending, (state, action) => {
        return {
          ...state,
          createProductLoading: true,
          createProductError: undefined,
          type: action.type,
        };
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        return {
          ...state,
          createProductLoading: false,
          createProductError: undefined,
          type: action.type,
        };
      })
      .addCase(createProduct.rejected, (state, action) => {
        return {
          ...state,
          createProductLoading: false,
          createProductError: action.payload,
          type: action.type,
        };
      })
      //#endregion

      //#region DELETE PRODUCT
      .addCase(deleteProductById.pending, (state, action) => {
        return {
          ...state,
          deleteProductByIdLoading: true,
          deleteProductByIdError: undefined,
          type: action.type,
        };
      })
      .addCase(deleteProductById.fulfilled, (state, action) => {
        return {
          ...state,
          deleteProductByIdLoading: false,
          deleteProductByIdError: undefined,
          type: action.type,
        };
      })
      .addCase(deleteProductById.rejected, (state, action) => {
        return {
          ...state,
          deleteProductByIdLoading: false,
          deleteProductByIdError: action.payload,
          type: action.type,
        };
      })
      //#endregion

      //#region RETRIEVE PRODUCT BY ID
      .addCase(retrieveProductById.pending, (state, action) => {
        return {
          ...state,
          retrieveProductByIdLoading: true,
          retrieveProductByIdError: undefined,
          type: action.type,
        };
      })
      .addCase(retrieveProductById.fulfilled, (state, action) => {
        return {
          ...state,
          retrieveProductByIdLoading: false,
          retrieveProductByIdError: undefined,
          productDetail: action.payload,
          type: action.type,
        };
      })
      .addCase(retrieveProductById.rejected, (state, action) => {
        return {
          ...state,
          retrieveProductByIdLoading: false,
          retrieveProductByIdError: action.payload,
          type: action.type,
        };
      })
      //#endregion

      //#region UPDATE PRODUCT BY ID
      .addCase(updateProductById.pending, (state, action) => {
        return {
          ...state,
          updateProductByIdLoading: true,
          updateProductByIdError: undefined,
          type: action.type,
        };
      })
      .addCase(updateProductById.fulfilled, (state, action) => {
        return {
          ...state,
          updateProductByIdLoading: false,
          updateProductByIdError: undefined,
          type: action.type,
        };
      })
      .addCase(updateProductById.rejected, (state, action) => {
        return {
          ...state,
          updateProductByIdLoading: false,
          updateProductByIdError: action.payload,
          type: action.type,
        };
      });
    //#endregion
  },
});

export const { actions: productAction, reducer: productReducer } = productSlice;
