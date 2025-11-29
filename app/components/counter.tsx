"use client";

import {
  decrement,
  increment,
  incrementByAmout,
} from "../redux/counter/counter";
import { useAppDispatch, useAppSelector } from "../redux/reduxHuks";

export default function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count);
  console.log(count);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        add
      </button>

      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        delete
      </button>
      <input
        type="number"
        onChange={(e) => {
          dispatch(incrementByAmout(+e.target.value));
        }}
      />
    </div>
  );
}
