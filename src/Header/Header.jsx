import Nav from "./Nav";
import React, { useContext } from "react";
import { Context } from "../Context/Context";
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
        <Context.Consumer>
          {({ user, logout }) => {
            return <>{user ? <p>Hola {user}</p> : ""}{user ? <Button variant="contained" onClick={logout} className="nav__botton">Logout</Button> : ""}</>;
          }}
        </Context.Consumer>
        <Button onClick={toogleTheme} variant="contained" color= "secondary">Cambiar</Button>

      </div>
    </header>
  );
}

export default Header;