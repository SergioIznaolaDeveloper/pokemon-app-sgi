import React, { useEffect, useState, useContext } from "react";
import { ContextTheme } from "../../Context/ContextTheme";
import Card from "./Card/Card";
import {DebounceInput} from 'react-debounce-input';

const HooksUseEffect = () => {
  const {them} = useContext(ContextTheme); //extraer __dark o "" de context
  const secStyle = "sec1"+them; //crear el className en base al context
  const [pokemons, setPokemons] = useState([]); // state para almacenar todos los pokemons
  const [pokemon, setPokemon] = useState([]); // state para almacenar el pokemon seleccionado
  const [recent,  setRecent] = useState([]); // state para almacenar los pokemons recientes
  const [inputText, setInputText] = useState(""); // state para almacenar el texto del input
  
  try {
    useEffect(() => {
       fetch(
          `https://pokeapi.co/api/v2/pokemon/${inputText}`
        )
        .then(res => res.json())
        .then(data => {
          includeData(data)
      })
      let repeted = false;
      const testRecent = () => {
        recent.map(p => {
         p.name === inputText ? repeted = true : console.log("no hay pokemos repetidos")
        })}
        setPokemon([]);
        testRecent()
        console.log(repeted)
      const includeData = (data) => {
        data.name ? (setPokemon(data)) : (paintPokemons());
        data.name 
        ? (recent===""
          ?(setRecent(data)) 
          : (repeted === false
            ?setRecent([data, ...recent,])
            :(console.log("no se puede agregar"))))
        : (console.log("no hay datos recientes"));
      }
      }, [inputText]);
    
    // funcion para fetch todos los pokemons
    const getPokemons = async () => {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=898`);
      const data = await resp.json();
      setPokemons(data);
    };
    getPokemons();

    // funcion para recoger el pokemon seleccionado desde input
    const onChangeInput = async (e) => {
      e.preventDefault();
      setInputText(e.target.value);
    };

    const paintPokemons = () =>
      pokemons.results.map((pok, i) => (
        <Card
          data={pok}
          key={i}
          foto={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}
        />
      ));

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
              <div className="recent__content">
            <p className="recent__name">🔎{pok.name}</p>
            <img
            key={i}
            className="recent__img"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pok.id}.png`}
              alt={pok.name}
              onClick={() => {setInputText(pok.name);}}
            /></div>))) : <p></p>}
            </div>
            </section>
            <p className="recent__text">POKEDEX - ALL OF POKEMONS</p>
        <section className="card__content">
          
        {inputText !== pokemon.name ? (
          paintPokemons()
        ) : (
          <article className="oneCard">
            <h2 className="oneCard__title">
              {pokemon.name.toUpperCase()} - {pokemon.types[0].type.name.toUpperCase()}
            </h2>
            <div className="oneCard__info_content">
            <img
            className="oneCard__img"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt=""
            />
            <div className="oneCard__text_content">
            <p className="oneCard__info">
              {pokemon.stats[0].stat.name.toUpperCase()} : {pokemon.stats[0].base_stat}
            </p>
            <p className="oneCard__info">
              {pokemon.stats[1].stat.name.toUpperCase()} : {pokemon.stats[1].base_stat}
            </p>
            <p className="oneCard__info">
              {pokemon.stats[2].stat.name.toUpperCase()} : {pokemon.stats[2].base_stat}
            </p>
            <p className="oneCard__info">
              {pokemon.stats[3].stat.name.toUpperCase()} : {pokemon.stats[3].base_stat}
            </p>
            <p className="oneCard__info">
              {pokemon.stats[4].stat.name.toUpperCase()} : {pokemon.stats[4].base_stat}
            </p>
            <p className="oneCard__info">  
              {pokemon.stats[5].stat.name.toUpperCase()} : {pokemon.stats[5].base_stat}
            </p>
            </div>
            </div>
          </article>
        )}
        </section>
      </section>
    );
  } catch (e) {
    console.log(e);
  }
};

export default HooksUseEffect;
