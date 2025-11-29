import { FC } from "react";
import Todo from "./components/todo";
import Card from "./components/card";
import Slide from "./components/slide";
import Les from "./components/les";
import Text from "../components/text";

const Page: FC = () => {
  return (
    <div>
      <h1>About page</h1>
      {/* <Todo/> */}
      <Card />
      <Slide/>
      <Les/>
      
    </div>
  );
};

export default Page;
