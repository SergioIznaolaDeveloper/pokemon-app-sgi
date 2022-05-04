import Nav from "./Nav";
import React, { useContext } from "react";
import { ContextTheme } from "../Context/ContextTheme";
import Logo from "../assets/logo_cakes.png";//importar imagen desde assets 
import { Button } from '@mui/material';

function Header() {

  const {them, toogleTheme} = useContext(ContextTheme);
  const headerStyle = "header"+them;
  console.log(headerStyle);
  return (
    <header className={headerStyle}>
      <img src={Logo} alt="logo" />
      <Nav />
      <div className="header__buttons-container">
        <Button onClick={toogleTheme} variant="contained" color= "secondary">Cambiar</Button>
      </div>
    </header>
  );
}

export default Header;