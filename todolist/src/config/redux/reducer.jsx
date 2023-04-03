import { combineReducers } from "redux";
import { counterReducer } from "./counter/counterSlice";
import { productReducer } from "./product/productSlice";
import { todoReducer } from "./todo/todoSlice";
import { userReducer } from "./user/userSlice";

const reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  user: userReducer,
  product: productReducer,
});

export default reducer;
