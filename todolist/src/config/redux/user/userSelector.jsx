import { useSelector } from "react-redux";

export const useUserListSelector = () =>
  useSelector((state) => state.user.users);

export const useRetrieveUserLoadingSelector = () =>
  useSelector((state) => state.user.retrieveUserLoading);
