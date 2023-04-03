import { useSelector } from "react-redux";

export const useProductsSelector = () =>
  useSelector((state) => state.product.products);
