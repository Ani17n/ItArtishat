"use client";
import { FC, useState } from "react";
import classes from "../style/acc.module.css";
import React from "react";

interface Products {
  id: number;
  name: string;
  cost: number;
  img: string;
}

const Acc = () => {
  const [compare, setCompare] = useState<Products[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  let products: Products[] = [
    {
      id: 1,
      name: "Nokie 8800",
      cost: 800,
      img: "/img/Nokia_8800.png",
    },
    {
      id: 2,
      name: "Samsung a800",
      cost: 800,
      img: "/img/img3.png",
    },
    {
      id: 3,
      name: "Samsung a800",
      cost: 800,
      img: "/img/img2.jpg",
    },
  ];

  const list = products.map((el, i) => {
    return (
      <div key={el.id}>
        <h2>{el.name}</h2>
        <h3>{el.cost}</h3>
        <img src={el.img} alt="" />
        <button
          onClick={() => {
            let arr = compare;
            let index = arr.findIndex((item) => item.id === el.id);
            if (index == -1) {
              arr.push(el);
            }
            setCompare([...arr]);
            console.log(compare);
          }}
        >
          hamematel
        </button>
      </div>
    );
  });
  return (
    <div className={classes.container}>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span
          className={`${classes.compare} ${compare.length > 0 && classes.add}`}
        >
          compare{compare.length}
        </span>
      </div>
      <div className={classes.list}> {list}</div>
      <div className={`${classes.modal} ${isOpen && classes.open}`}>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span
            className={`${classes.compare} ${
              compare.length > 0 && classes.add
            }`}
          >
            close{" "}
          </span>
        </div>

        {compare.map((el) => {
          return (
            <div key={el.id} className={classes.card}>
              <h2>{el.name}</h2>
              <img src={el.img} alt="" />
            </div>
          );  
        })}
      </div>
    </div>
  );
};

export default Acc;
