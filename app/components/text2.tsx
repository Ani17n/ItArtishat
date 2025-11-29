"use client";
import React, { FC, useContext } from "react";
import { ThemeContext } from "../context/context";

const Text2: FC = () => {
  const [theme, setTheme] = useContext(ThemeContext) as any;

  return (
    <div>
      <button
        onClick={() => {
          setTheme(theme == "dark" ? "light" : "dark");
        }}
      >
        {theme == "dark" ? "dark" : "light"}{" "}
      </button>
      <h2 style={{ color: theme == "light" ? "blue" : "black" }}>
        {" "}
        hello text2
      </h2>
    </div>
  );
};

export default Text2;
