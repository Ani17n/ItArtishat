"use client";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import classes from "./menu.module.css";

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
