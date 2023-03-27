import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cuonterAction } from "../../config/redux/counter/counterSlice";

const Counter = () => {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Counter {state.angka} </div>
      {/* {state.counter.map((val) => {
        return <div>{val}</div>;
      })} */}
      <div>
        <button
          onClick={() => {
            dispatch(cuonterAction.increment());
          }}
        >
          plus
        </button>
        <button
          onClick={() => {
            dispatch(cuonterAction.decrement());
          }}
        >
          minus
        </button>
        <button
          onClick={() => {
            dispatch(cuonterAction.reset());
          }}
        >
          reset
        </button>

        <button
          onClick={() => {
            dispatch(cuonterAction.update(1000));
          }}
        >
          update to 1000
        </button>
      </div>
    </div>
  );
};

export default Counter;
