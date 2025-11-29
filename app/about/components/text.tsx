"use client";
import React, { FC } from "react";
import classes from "../style/text.module.css";

const Text: FC = () => {
  function mergeArrays(arr: number[], arr1: number[]) {
    let result: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      arr1.push(arr[i]);
    }
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr1.length; j++) {
        if (arr[i] < arr[j]) {
          let temp = arr1[i];
          arr1[i] = arr1[j];
          arr1[j] = temp;
        }
      }
    }
  }
  // Пример:
  console.log(mergeArrays([1, 3, 5], [2, 4, 6]));
  // mergeArrays([1, 3, 5], [2, 4, 6]); //→ [1, 2, 3, 4, 5, 6]

  return (
    <div className={classes.homeBg}>
      <h1>hello TS</h1>
    </div>
  );
};

export default Text;
