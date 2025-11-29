"use client";
import { strict } from "assert";
import React, { FC, memo, useRef } from "react";

interface Props {
  name: string;
  data: {
    title: string;
  };

  func: () => void;
}

const Gift: FC<Props> = ({ name, data, func }) => {
  const useCountRef = useRef(0);
  useCountRef.current++;
  console.log(useCountRef.current);

  return (
    <div>
      <h3 onClick={func}>{data.title}</h3>
      <p>{name}</p>
    </div>
  );
};

export default memo(Gift);
