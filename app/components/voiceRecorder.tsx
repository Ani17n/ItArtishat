import React, { FC, useState, useRef, useEffect } from "react";
import classes from "../style/voiceRecorder.module.css";

const VoiceRecorder: FC = () => {
  let arr = [1, 2, 21, 8, 7, 1, 9, 1, 45];
  function getUniq(arr: number[]) {
    let result: number[] = [];
    arr.forEach((el) => {
      if (!result.includes(el)) {
        result.push(el);
      }
    });
    return result;
  }
  console.log(getUniq(arr));

  return <div className={classes.page}></div>;
};

export default VoiceRecorder;
