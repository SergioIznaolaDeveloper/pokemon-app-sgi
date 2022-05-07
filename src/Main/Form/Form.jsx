import React from "react";
function Form() {
  return (
    <form  className="form">
    <div className="form__container">
    <label className="sec1__label" htmlFor="name">Name: </label>
    <input className="form__label"  name='name'/>
    <label className="sec1__label" htmlFor="name">Type: </label>
    <input className="form__label" name='typr'/>
    </div>
    <div className="form__container">
    <label className="sec1__label" htmlFor="url">Picture: </label>
    <input className="form__label"  name='url'/>
    </div>
    <div className="form__container">
    <label className="sec1__label" htmlFor="HP">HP: </label>
    <input className="form__label"  name='HP'/>
    <label className="sec1__label" htmlFor="atacck">ATTACK: </label>
    <input className="form__label"  name='atacck'/>
    </div>
    <div className="form__container">
    <label className="sec1__label" htmlFor="defense">DEFENSE: </label>
    <input className="form__label"  name='defense'/>
    <label className="sec1__label" htmlFor="speed">SPEED: </label>
    <input className="form__label"  name='speed'/>
    </div>
    <div className="form__container">
    <label className="sec1__label" htmlFor="sAttack">SPECIAL-ATTACK: </label>
    <input className="form__label"  name='sAttack'/>
    <label className="sec1__label" htmlFor="sDefense">SPECIAL-DEFENSE: </label>
    <input className="form__label"  name='sDefense'/>
    </div>
    <button type="submit" className="form__button" >NEW</button>
  </form >
  )
}

export default Form;

