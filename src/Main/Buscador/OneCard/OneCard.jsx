import React from 'react'
import { Context } from "../../../Context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

function OneCard() {
  const {pokemon} = useContext(Context); //extraer datos y funciones delcontext
  return (
    <article className="oneCard">
            <h2 className="oneCard__title">
              {pokemon.name.toUpperCase()} - {pokemon.types[0].type.name.toUpperCase()}
            </h2>
            <Link to=
              {
                `/pokemon?id=${pokemon.id}&name=${pokemon.name}&ability1=${pokemon.abilities[0].ability.name}&ability2=${pokemon.abilities[1].ability.name}&type=${pokemon.types[0].type.name}&experience=${pokemon.base_experience}&height=${pokemon.height}&weight=${pokemon.weight}&hp=${pokemon.stats[0].base_stat}&attack=${pokemon.stats[1].base_stat}&defense=${pokemon.stats[2].base_stat}&sAttack=${pokemon.stats[3].base_stat}&sDefense=${pokemon.stats[4].base_stat}&speed=${pokemon.stats[5].base_stat}`}> 
              <p className='oneCard__button'>EXTENDED INFO ABOUT {pokemon.name.toUpperCase()}</p>
              </Link>
              <img
            className="oneCard__img"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt=""
            />
            <div className="oneCard__info_content">
            <div className="oneCard__text_content">
            <p className='oneCard__param'>Attack:</p>
            <p className="oneCard-ext__info">
              {pokemon.stats[1].base_stat}
            </p>
            </div>
            <div className="oneCard__text_content">
            <p className='oneCard__param'>Defense</p>
            <p className="oneCard-ext__info">
              {pokemon.stats[2].base_stat}
            </p>
            </div>
            <div className="oneCard__text_content">
            <p className='oneCard__param'>Special Attack</p>
            <p className="oneCard-ext__info">
              {pokemon.stats[3].base_stat}
            </p>
            </div>
            <div className="oneCard__text_content">
            <p className='oneCard__param'>Special Defense</p>
            <p className="oneCard-ext__info">
             {pokemon.stats[4].base_stat}
             </p>
             </div>
            </div>
          </article>
  )
}

export default OneCard;

// {
//   `/pokemon/id=${pokemon.id}?&name=${pokemon.name}&ability1=${pokemon.abilities[0].ability.name}&ability2=${pokemon.abilities[1].ability.name}&type=${pokemon.types[0].type.name}&experience=${pokemon.base_experience}&height=${pokemon.height}&weight=${pokemon.weight}&hp=${pokemon.stats[0].base_stat}&attack=${pokemon.stats[1].base_stat}&defense=${pokemon.stats[2].base_stat}&sAttack=${pokemon.stats[3].base_stat}&sDefense=${pokemon.stats[4].base_stat}&speed=${pokemon.stats[5].base_stat}`}