import React, { useContext } from "react";
import { Route, Routes } from 'react-router-dom';
import { ContextTheme } from "../Context/ContextTheme";
import Topics from "./Topics/Topics";
import Buscador from "./Buscador/Buscador";
import Form from "./Form/Form";
function Main() {
  const { them } = useContext(ContextTheme);
  const mainStyle = "main"+them;
  return (
    <main className={mainStyle}>
    <h1>POKEMONS APP</h1>
    <Routes> 
      <Route path="/" element={<Topics />} />
      <Route path="/search" element={<Buscador />} />  
      <Route path="/new" element={<Form />} />  
    </Routes>
  </main>
  )
}


export default Main;
