import React from "react";

let arr = [
  { name: "Аня", grade: "95", passed: true },
  { name: "Вова", grade: 58, passed: true },
  { name: "Катя", grade: 72, passed: false },
  { name: "Дима", grade: null, passed: true },
  { name: "Саша", grade: 80 },
  { name: "Миша", grade: "85", passed: "yes" },
  { name: "Оля", grade: 100, passed: true },
];

console.log(arr.filter((el) => el.grade && +el.grade > 80));

export const Les = () => {
  return <div></div>;
};
