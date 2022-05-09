import React, { useContext } from "react";
import { ContextTheme } from "../../Context/ContextTheme";
import { Context } from "../../Context/Context";
import {DebounceInput} from 'react-debounce-input';
import OneCard from "./OneCard/OneCard"

function Buscador() {
  const {them} = useContext(ContextTheme); //extraer __dark o "" de context
  const secStyle = "sec1"+them; //crear el className en base al context
  const {recent, inputText, onChangeInput, setInputText, pokemon} = useContext(Context); //extraer datos y funciones delcontext
  return (
    <section className={secStyle}>
        <p>POKEDEX - SEARCHER</p>
        <form className="sec1__form">
          <label className="sec1__label" htmlFor="name">Pokemon name: </label>
          <DebounceInput // boton con debounce de 1 segundo para no saturar la api
          debounceTimeout={1000}
          className="sec1__input"
            name="name"
            type="text"
            placeholder="pikachu"
            value={inputText}
            onChange={onChangeInput}
          ></DebounceInput>
        </form>
        <section className="recent">
        {recent.length? <p className="recent__text">LAST POKEMONS SEARCHED...</p>:<p></p>}
        <div className="recent__container">
        {recent.length? (   
          recent.slice(0, 6).map((pok, i) => (
              <div  className="recent__content">
            <p className="recent__name">🔎{pok.name}</p>
            <img
              className="recent__img"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pok.id}.png`}
              alt={pok.name}
              onClick={() => {setInputText(pok.name);}}
            /></div>))) : <p></p>}
            </div>
            </section>
            {inputText !== pokemon.name ? (
              <></>
            ) : (
              <>
                <OneCard/>
              </>
            )}
            </section>

        );
  
}

export default Buscador;
