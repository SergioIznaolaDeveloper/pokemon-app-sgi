import React from 'react'
import { useLocation } from 'react-router-dom'


export default function OneCardExtend(props) {
  const {search} = useLocation();
  let query = new URLSearchParams(search);
  let id = query.get('id');
  let name = query.get('name');
  let ability1 = query.get('ability1');
  let ability2 = query.get('ability2');
  let type = query.get('type');
  let height = query.get('height');
  let weight = query.get('weight');
  let hp = query.get('hp');
  let attack = query.get('attack');
  let defense = query.get('defense');
  let sAttack = query.get('sAttack');
  let sDefense = query.get('sDefense');
  let speed = query.get('speed');
  let experience = query.get('experience');
  return (
    <article className="oneCard-ext">
    <h2 className="oneCard-ext__title">
      {name.toUpperCase()} - {type.toUpperCase()}
    </h2>
    <img
    className="oneCard-ext__img"
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      alt=""
    />
    <div className="oneCard-ext__info_content">

    <div className='oneCard-ext__textContent'>
    <p className='oneCard-ext__param'>First ability:</p>
    <p className="oneCard-ext__info">
    {ability1.toUpperCase()}
    </p>
    </div>
    <div className='oneCard-ext__textContent'>
    <p className='oneCard-ext__param'>Second ability:</p>
    <p className="oneCard-ext__info">
     {ability2.toUpperCase()}
    </p>
    </div>
    <div className='oneCard-ext__textContent'>
    <p className='oneCard-ext__param'>Heigth:</p>
    <p className="oneCard-ext__info">
     {height}
    </p>
    </div>
    <div className='oneCard-ext__textContent'>
    <p className='oneCard-ext__param'>Weight:</p>
    <p className="oneCard-ext__info">
    {weight}
    </p>
    </div>
    <div className='oneCard-ext__textContent'>
    <p className='oneCard-ext__param'>HP:</p>
    <p className="oneCard-ext__info">
     {hp}
    </p>
    </div>
    <div className='oneCard-ext__textContent'>
    <p className='oneCard-ext__param'>Attack:</p>
    <p className="oneCard-ext__info">  
     {attack}
    </p>
    </div>
    <div className='oneCard-ext__textContent'>
    <p className='oneCard-ext__param'>Defense:</p>
    <p className="oneCard-ext__info">
    {defense}
    </p>
    </div>
    <div className='oneCard-ext__textContent'>
    <p className='oneCard-ext__param'>Special Attack:</p>
    <p className="oneCard-ext__info">
    {sAttack}
    </p>
    </div>
    <div className='oneCard-ext__textContent'>
    <p className='oneCard-ext__param'>Special Defense:</p>
    <p className="oneCard-ext__info">
    {sDefense}
    </p>
    </div>
    <div className='oneCard-ext__textContent'>
    <p className='oneCard-ext__param'>Speed</p>
    <p className="oneCard-ext__info">
    {speed}
    </p>
    </div>
    <div className='oneCard-ext__textContent'>
    <p className='oneCard-ext__param'>Experience:</p>
    <p className="oneCard-ext__info">
    {experience}
    </p>
    </div>
    <div className='oneCard-ext__textContent'>
    <p className='oneCard-ext__param'>Pokemon ID:</p>
    <p className="oneCard-ext__info">  
    {id}
    </p>
    </div>
    </div>
  </article>
  )
}
