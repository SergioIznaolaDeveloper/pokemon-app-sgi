import Nav from "./Nav";
import React, { useContext } from "react";
import { ContextTheme } from "../Context/ContextTheme";
import Logo from "../assets/logo_cakes.png";//importar imagen desde assets 

function Header() {

  const {them, toogleTheme} = useContext(ContextTheme);
  const headerStyle = "header"+them;
  return (
    <header className={headerStyle}>
      <img src={Logo} alt="logo" />
      <Nav />
      <div className="header__buttons-container">
        {them === "_dark" ? (
        <button className="style__button" onClick={toogleTheme}>🌞</button>
        ) : (
          <button className="style__button" onClick={toogleTheme}>🌚</button>
        )}
      </div>
    </header>
  );
}

export default Header;