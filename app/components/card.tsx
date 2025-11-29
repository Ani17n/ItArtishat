import {FC} from "react";
import classes from "../style/card.module.css"


interface Props {
  src: string;
  title: string;
  text: string;
}

const Card: FC<Props> = ({src, title, text}) => {
    return <div className={classes.card}>
          <img src={src} alt=""></img>
          <h3>{title}</h3>
          <p>{text}</p>
    </div>;
};

export default Card;