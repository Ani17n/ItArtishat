"use client";

import Image from "next/image";
import styles from "./page.module.css";

import Homebg from "./components/homebg";
// import Text from "./components/text";
import Card from "./about/components/card";
import Acc from "./components/acc";
// import Counter from "./components/counter";
import SetName from "./components/setName";
import Todo from "./components/todo";
import { Les } from "./components/les";
import VoiceRecorder from "./components/voiceRecorder";
import { useState } from "react";
import Counter from "./components/counter";
import InfinityScroll from "./components/scroll";
import Task from "./components/row";
import { Text } from "./components/text";
import Text2 from "./components/text2";
// import Todo from "./components/todo";
// import AccItem from "./components/accItem";
// import Acc from "./components/acc";
// import Todo from "./components/todo";
// import Contact from "./components/contact";
// import List  from "./components/list";
import { ShowContext, ThemeContext } from "./context/context";
import Products from "./components/products";

// interface User {
//   firstName: string;
//   age: number;
// }

// export default function Home() {
//   let users: User[] = [
//     { firstName: "Karen", age: 25 },
//     { firstName: "Karine", age: 28 },
//     { firstName: "Mush", age: 18 },
//   ];

//   let userObj: User;
//   userObj = users[0];
//   for (let i = 0; i < users.length; i++) {
//        if (userObj.age < users[i].age) {
//         userObj = users[i];
//        }
//   }
//   console.log(userObj);

//   return <div className={styles.page}></div>;
// }

// export default function Home() {
//   let text = "hello props in ts";
//   let desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
//   return (
//     <div className={styles.page}>
//       <List />
//       <Text title="lorem 25" color="red" text="desc" />
//       <Text title={text} color="purple" />
//     </div>
//   );
// }
export default function Home() {
  let str = "hello world";

  function reversStr(arg: string) {
    let str = arg.split(" ");
    return str.map((el) => el.split("").reverse().join("")).join(" ");
  }
  console.log(reversStr(str));

  const [theme, setTheme] = useState("light");
  const [show, setShow] = useState(false);

  return (
    <div className={styles.page}>
      {/* <Counter /> */}
      {/* <Homebg /> */}
      {/* <Acc /> */}
      {/* <Counter/>
       */}
      {/* <Text /> */}
      {/* <VoiceRecorder /> */}
      {/* <InfinityScroll /> */}
      {/* <Task /> */}
      {/* <button
        onClick={() => {
          setTheme(theme == "dark" ? "light" : "dark");
        }}
      >
        {theme == "dark" ? "dark" : "light"}
      </button>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        click
      </button>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <ShowContext.Provider value={[show, setShow]}>
          <Text />
          <Text2 />
        </ShowContext.Provider>
      </ThemeContext.Provider> */}
      <Products />
    </div>
  );
}
