import { combineReducers } from "redux";
import { counterReducer } from "./counter/counterSlice";
import { todoReducer } from "./todo/todoSlice";

const reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

export default reducer;
