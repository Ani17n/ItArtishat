"use client";
import { FC, useState } from "react";
export default function ImageSlider() {
  const images = [
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1024/600/400",
    "https://picsum.photos/id/1035/600/400",
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div>
      <h2>Նկարների սլայդեր</h2>

      <img src={images[index]} alt="slide" width="600" height="400" />

      <div>
        <button onClick={prev}>Նախորդ</button>
        <button onClick={next}>Հաջորդ</button>
      </div>
    </div>
  );
}
