import { useSelector } from "react-redux";

export const useTokenSelector = () =>
  useSelector((state) => state.session.token);
