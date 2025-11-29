import { FC, useRef, memo } from "react";
import classes from "../style/homeg.module.css";
interface Props {
  name: string;
  click: () => void;
}

const Homeg: FC<Props> = ({ name, click }) => {
  const count = useRef(0);
  count.current++;
  console.log(count.current, "render");

  return (
    <div className={classes.homeBg} onClick={click}>
      <h1>{name}</h1>
    </div>            
  );  
};

export default memo(Homeg);
