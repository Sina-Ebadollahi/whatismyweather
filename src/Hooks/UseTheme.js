// Theme Context
import { ThemeContext } from "../Context/ThemeContext";
// hooks
import { useContext } from "react";
export default function UseTheme() {
  const Theme = useContext(ThemeContext);
  if (Theme === undefined) {
    throw new Error("UseTheme() must be used in childrens of index.js");
  }
  return Theme;
}
