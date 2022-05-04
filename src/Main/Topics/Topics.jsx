import React, { useEffect, useState } from "react";
import Card from "./Card/Card";

const HooksUseEffect = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [recent,  setRecent] = useState([]);
  const [inputText, setInputText] = useState("");
  try {
    
    useEffect(() => {
      const getPokemons = async () => {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon`);
        const data = await resp.json();
        setPokemons(data);
      };
      getPokemons();
    }, []);

    // const suggestPokemon = (e) => {
    //   const names = pokemons.results.map((pokemons) => (
    //     pokemons.name
    //     ));
    //   const regex = new RegExp(`${inputText} [^] *`)
    // }

    const onChangeInput = async (e) => {
      e.preventDefault();
      setInputText(e.target.value);
      const resp = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${e.target.value}`
      );
      const data = await resp.json();
      console.log(data);
      data.name ? (setPokemon(data)) : (paintPokemons()); 
      data.name ? (recent===""?(setRecent(data)):(setRecent([...recent, data]))) : (console.log("no hay datos recientes"));
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
      <>
        <p>Busca datos sobre tu pokemon favorito:</p>
        {/* {suggestPokemon()} */}
        <form>
          <label htmlFor="name">Pokemon: </label>
          <input
            name="name"
            type="text"
            placeholder="pikachu"
            value={inputText}
            onInput={onChangeInput}
          ></input>
        </form>
        <section className="card__content">
        {inputText !== pokemon.name ? (
          paintPokemons()
        ) : (
         
          <article className="oneCard">
            <h2 className="oneCard__title">
              {pokemon.name} - {pokemon.types[0].type.name}
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
      </>
    );
  } catch (e) {
    console.log(e);
  }
};

export default HooksUseEffect;
