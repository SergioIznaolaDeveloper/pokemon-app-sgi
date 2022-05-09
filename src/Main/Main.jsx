import React, { useContext } from "react";
import { Route, Routes} from 'react-router-dom';
import { ContextTheme } from "../Context/ContextTheme";
import Topics from "./Topics/Topics";
import Buscador from "./Buscador/Buscador";
import Form from "./Form/Form";
import OneCardExtend from "./OneCardExtend/OneCardExtend";

function Main() {
  const { them } = useContext(ContextTheme);
  const mainStyle = "main"+them;
  return (
    <main className={mainStyle}>
    <h1>POKEMONS APP</h1>
    <Routes> 
      <Route exact path="/" element={<Topics />} />
      <Route exact path="/search" element={<Buscador />} />  
      <Route exact path="/new" element={<Form />} />
      <Route exact path= {`/pokemon`} element={<OneCardExtend/>} />
    </Routes>
  </main>
  )
}


export default Main;
