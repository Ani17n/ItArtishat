import { FC } from "react";
import classes from "../style/menu.module.css";
import Link from "next/link";

const Menu: FC = () => {
  return (
    <div className={classes.container}>
      <Link className={classes.nav_link} href={"/"}>
        Home
      </Link>
      <Link className={classes.nav_link} href={"/about"}>
        About
      </Link>
      <Link className={classes.nav_link} href={"/contact"}>
        Contact
      </Link>
    </div>
  );
};
export default Menu;
