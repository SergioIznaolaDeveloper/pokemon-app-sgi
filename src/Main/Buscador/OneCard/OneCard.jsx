import React from 'react'
import { Context } from "../../../Context/Context";
import { useContext } from "react";


function OneCard() {
  const {pokemon} = useContext(Context); //extraer datos y funciones delcontext
  return (
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
  )
}

export default OneCard;