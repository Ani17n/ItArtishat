"use client";
import { FC, useReducer, useState } from "react";

interface TodoType {
  id: number;
  text: string;
  completed: boolean;
}

function reducer(state: TodoType[], action: Record<string, any>) {
  if (action.type === "set_todo") {
    return [
      ...state,
      { id: Math.random(), text: action.payload, completed: false },
    ];
  } else if (action.type === "delete") {
    return state.filter((el) => el.id !== action.payload);
  } else if (action.type === "checked") {
    return state.map((el) =>
      el.id == action.payload ? { ...el, completed: el.completed } : el
    );
  }
  throw Error("Unknown action.");
}

const Todo: FC = () => {
  const [value, setValue] = useState("");
  const [state, dispatch] = useReducer(reducer, [
    {
      id: Math.random(),
      text: "learn ts",
      completed: false,
    },
    {
      id: Math.random(),
      text: "read ts docs",
      completed: false,
    },
    {
      id: Math.random(),
      text: "read ts decorators",
      completed: false,
    },
  ]);
  const todoList = state.map((el) => {
    return (
      <div key={el.id}>
        <input
          type="checkbox"
          checked={el.completed}
          onChange={() => {
            dispatch({
              type: "checked",
              payload: el.id,
            });
          }}
        />
        <p>{el.text}</p>
        <button
          onClick={() => {
            dispatch({
              type: "delete",
              payload: el.id,
            });
          }}
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (value.length > 0) {
              dispatch({
                type: "set_todo",
                payload: value,
              });
              setValue("");
            }
          }}
        >
          add
        </button>
      </div>
      <div>{todoList}</div>
    </div>
  );
};

export default Todo;
