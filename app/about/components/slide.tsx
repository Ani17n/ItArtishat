
"use client"
import React, { FC, useState } from "react";

const Slide: FC = () => {
  const [index, setIndex] = useState(0);
  const images = ["/img/background1.jpg", "/img/img.jpg", "/img/img2.jpg"];
  const next = () => {
    setIndex(index + 1 <= images.length - 1 ? index + 1 : 0);
  };
  const prev = () => {
    setIndex(index - 1 >= 0 ? index - 1 : images.length - 1);
  };
  return (
    <div>
      <img src={images[index]} alt="img" />
      <button onClick={next}> left </button>
      <button onClick={prev}> right </button>
    </div>
  );
};

export default Slide;
