import React, { useContext } from "react";
import { ContextTheme } from "../Context/ContextTheme";

function Footer() {
  const { them } = useContext(ContextTheme);
  const footerStyle = "footer"+them;
  console.log(footerStyle);
  return <footer className={footerStyle}></footer>;
}

export default Footer;
