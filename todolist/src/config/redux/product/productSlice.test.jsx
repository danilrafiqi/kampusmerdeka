import { initialState, productReducer } from "./productSlice";

describe("productSlice", () => {
  it("should have correct initial state", () => {
    expect(productReducer(undefined, { type: undefined })).toEqual(
      initialState
    );
  });

  it("should have correct initial state", () => {
    expect(initialState).toEqual({
      products: [],
      retrieveProductsLoading: false,
      retrieveProductsError: undefined,

      createProductLoading: false,
      createProductError: undefined,
    });
  });
});
