"use client";
import { FC, useState, useMemo, useCallback } from "react";
import Text from "./gift";
import Gift from "./gift";
const Card: FC = () => {
  // const [count, setCount] = useState(0);
  // console.log("card");

  // let obj = { title: "lorem ispum", count: count };

  const [count, setCount] = useState(0);

  let obj = {
    title: "lorem ipsum",
  };

  const memoObj = useMemo(() => obj, []);
  const handleClick = () => {
    console.log(45);
  };

  const memoHandleClick = useCallback(handleClick, []);
  return (
    <div>
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
      <h2>hello Memo</h2>
      <Text name="Karen" data={memeObj} /> */}
      <p>hello</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
      <Gift func={memoHandleClick} name={"Karen"} data={memoObj} />
    </div>
  );
};

export default Card;
