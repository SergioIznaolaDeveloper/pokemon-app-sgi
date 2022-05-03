import React, { useEffect, useState } from "react";
import Card from "./Card/Card";

const HooksUseEffect = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokSelect, setPokSelect] = useState([]);
  try {
    useEffect(() => {
      const getPokemons = async () => {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
        const data = await resp.json();
        setPokemons(data);
      };
      getPokemons();
    }, []);

    const getByName = async (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      console.log(name);
      const resp = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${e.target.name.value}`
      );
      const data = await resp.json();
      setPokSelect([...pokSelect, data]);
      setPokemons(data);
    };
    const paintPokemons = () => 
    pokemons.results.map((pok, i) => (
      <Card data={pok} key={i} foto={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`} />
    ));


    return (
      <>
      <p>Busca datos sobre tu pokemon favorito:</p>
        <form onSubmit={getByName}>
          <label htmlFor="name">Pokemon: </label>
          <input name="name" type="text" placeholder="pikachu"></input>
          <button>Search</button>
        </form>
        {!pokemons.abilities
        ?(paintPokemons())
        :(
          <article>
        <h2>{pokemons.name} - {pokemons.types[0].type.name}</h2>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons.id}.png`} alt="" />
        <p>{pokemons.stats[0].stat.name} : {pokemons.stats[0].base_stat}</p>
        <p>{pokemons.stats[1].stat.name} : {pokemons.stats[1].base_stat}</p>
        <p>{pokemons.stats[2].stat.name} : {pokemons.stats[2].base_stat}</p>
        <p>{pokemons.stats[3].stat.name} : {pokemons.stats[3].base_stat}</p>
        <p>{pokemons.stats[4].stat.name} : {pokemons.stats[4].base_stat}</p>
        <p>{pokemons.stats[5].stat.name} : {pokemons.stats[5].base_stat}</p>
        </article>
        )}
      
      </>
    );
  } catch (e) {
    console.log(e);
  }
};

export default HooksUseEffect;
