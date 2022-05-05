import React, { useContext } from "react";
import { ContextTheme } from "../Context/ContextTheme";

function Footer() {
  const { them } = useContext(ContextTheme);
  const footerStyle = "footer"+them;

  return <footer className={footerStyle}>Pokemon WebApp made by 🍀 Sergio González Iznaola</footer>;
}

export default Footer;
