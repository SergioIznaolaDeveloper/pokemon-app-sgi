import React, { useEffect, useState, useContext } from "react";
import { ContextTheme } from "../../Context/ContextTheme";
import Card from "./Card/Card";

const HooksUseEffect = () => {
  const {them} = useContext(ContextTheme);
  const secStyle = "sec1"+them;
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [recent,  setRecent] = useState([]);
  // const [id,  setRecent] = useState([]);
  const [inputText, setInputText] = useState("");
  try {
    
    useEffect(() => {
      const getPokemons = async () => {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=898`);
        const data = await resp.json();
        setPokemons(data);
      };
      getPokemons();
    }, []);

    const onChangeInput = async (e) => {
      e.preventDefault();
      setInputText(e.target.value);
      const resp = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${e.target.value}`
      );
      const data = await resp.json();
      data.name ? (setPokemon(data)) : (paintPokemons()); 
      data.name ? (recent===""?(setRecent(data)):(setRecent([data, ...recent,]))) : (console.log("no hay datos recientes"));
    };

    const paintPokemons = () =>
      pokemons.results.map((pok, i) => (
        <Card
          data={pok}
          key={i}
          foto={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}
        />
      ));

    const recentPokemon = () =>
      recent.map((pok) => (
         pok.id
      ));
      recentPokemon()
   
    return (
      <section className={secStyle}>
        <p>POKEDEX - SEARCHER</p>
        {/* {suggestPokemon()} */}
        <form className="sec1__form">
          <label className="sec1__label" htmlFor="name">Pokemon name: </label>
          <input
          className="sec1__input"
            name="name"
            type="text"
            placeholder="pikachu"
            value={inputText}
            onInput={onChangeInput}
          ></input>
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
