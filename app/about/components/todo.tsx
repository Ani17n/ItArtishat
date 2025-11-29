"use client";
import { FC, useState } from "react";

const Todo: FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "Learn ts",
      complited: false,
    },
    {
      id: Math.random(),
      text: "Learn scss",
      complited: true,
    },
  ]);

  const handleDelete = (id: number) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  const todoList = todos.map((el,i) => {
    return (
      <div key={i}>
        <input type={"checkbox"} checked={el.complited} />
        <p>{el.text}</p>
        <button onClick={() => handleDelete(el.id)}>delete</button>
      </div>
    );
  });

  const handleAdd = () => {
    if (value.length > 0) {
      setTodos([
        {
          id: Math.random(),
          text: "Learn ts",
          complited: false,
        },
        ...todos,
      ]);
      setValue("");
    }
  };

  return (
    <div>
      <div>
        <input
          value={value}
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={handleAdd}>add</button>
      </div>
      {todoList}
    </div>
  );
};

export default Todo;

