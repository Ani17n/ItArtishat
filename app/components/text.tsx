"use client";
import React, { useContext } from "react";
import { ShowContext, ThemeContext } from "../context/context";
import classes from "../style/text.module.css";

export const Text = () => {
  const [theme, setTheme] = useContext(ThemeContext) as any;
  const [show, setShow] = useContext(ShowContext) as any;
  return (
    <div>
      <div className={`${classes.cub} ${show && classes.show}`}></div>

      <h2 style={{ color: theme == "light" ? "blue" : "black" }}>
        {" "}
        hello text1
      </h2>
    </div>
  );
};



