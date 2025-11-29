"use client";
import React, { FC } from "react";

const Task: FC = () => {
  const text = (str1: string, str2: string) => {
    let count = 0;

    for (let i = 0; i < str1.length; i++) {
      if (str1[i] === str2) {
        count += 1;
      }
    }

    return count;
  };

  console.log(text("barev dzez dzer cavy tanem", "a"));

  return (
    <div>
      <h1>jmhjmg</h1>
    </div>
  );
};

export default Task;
