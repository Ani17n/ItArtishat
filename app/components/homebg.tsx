"use client";
import { FC, useCallback, useState } from "react";
import styles from "../style/homebg.module.css";
import Homeg from "./homeg";
const Homebg: FC = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log(18);
  };
  const memoHandleClick = useCallback(handleClick, []);
  return (
    <div>
      <div className={styles.container}>
        <h1>hello home {count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          click
        </button>
      </div>
      <Homeg name="Karen" click={memoHandleClick} />
    </div>
  );
};

export default Homebg;
