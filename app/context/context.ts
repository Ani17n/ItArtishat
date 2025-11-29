import { Dispatch } from "@reduxjs/toolkit";
import { createContext, useState } from "react";

export const ThemeContext: any = createContext(["light"]);
export const ShowContext: any = createContext([false]);
