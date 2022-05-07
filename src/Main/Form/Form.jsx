import React, {Fragment, useContext} from "react";
import { Context } from "../../Context/Context";
import { useForm } from "react-hook-form";

function Form() {
  const { addPokemon } = useContext(Context);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => addPokemon(data);

    

  return (
    <>
    <form className="form" onSubmit={handleSubmit(onSubmit)}> 
    <label className="sec1__label" htmlFor="name">Name: </label>
    <input placeholder={errors.name?.type === 'required' && "Name is required"} {...register("name", { required: true })} className="form__input"/>
    <label className="sec1__label" htmlFor="name">Type</label>
    <select placeholder="Fire"{...register("type")} className="form__input">
        <option value="Fir">Fire</option>
        <option value="Water">Water </option>
        <option value="Grass">Grass</option>
        <option value="Electric">Electric</option>
        <option value="Ice">Ice</option>
        <option value="Fighting">Fighting</option>
        <option value="Pison">Poison</option>
        <option value="Ground">Ground</option>
        <option value="Psychic">Psychic</option>
        <option value="Bug">Bug</option>
        <option value="Rock">Rock</option>
        <option value="Ghost">Ghost</option>
        <option value="Dark">Dark</option>
        <option value="Dragon">Dragon</option>
        <option value="Steel">Steel</option>
        <option value="Fairy">Fairy</option> 
    </select>
    <label className="sec1__label" htmlFor="url">Picture: </label>
    <input type="url" {...register("url", { required: true })} className="form__input"   name='url'/>
    <label className="sec1__label" htmlFor="hp">HP(max100): </label>
    <input type="number" {...register("hp", { required: true, min: 10, max: 100 })} className="form__input"  name='hp'/>
    <label className="sec1__label" htmlFor="attack">ATTACK(max100): </label>
    <input type="number" {...register("attack", { required: true, min: 10, max: 100 })} className="form__input"   name='attack'/>
    <label className="sec1__label" htmlFor="defense">DEFENSE(max100): </label>
    <input type="number" {...register("defense", { required: true, min: 10, max: 100 })} className="form__input"   name='defense'/>
    <label className="sec1__label" htmlFor="speed">SPEED(max100): </label>
    <input type="number" {...register("speed", { required: true, min: 10, max: 100 })} className="form__input"   name='speed'/>
    <label className="sec1__label" htmlFor="sAttack">SPECIAL-ATTACK(max150): </label>
    <input type="number" {...register("sAttack", { required: true, min: 10, max: 150 })} className="form__input"   name='sAttack'/>
    <label className="sec1__label" htmlFor="sDefense">SPECIAL-DEFENSE(max150): </label>
    <input type="number" {...register("sDefense", { required: true, min: 10, max: 150 })} className="form__input"   name='sDefense'/>
 
    <input value="ADD NEW" type="submit" className="form__button"/>
    {errors.hp?.type?<p>HP {errors.hp?.type}  - You need an HP between 10 and 100</p>: null}
    {errors.attack?.type?<p>Attack {errors.attack?.type}  - You need an attack between 10 and 100</p>: null}
    {errors.defense?.type?<p>Defense {errors.defense?.type}  - You need an defense between 10 and 100</p>: null}
    {errors.speed?.type?<p>Speed {errors.speed?.type}  - You need an speed between 10 and 100</p>: null}
    {errors.sAttack?.type?<p>Special-Attack {errors.sAttack?.type}  - You need an special-attack between 10 and 100</p>: null}
    {errors.sDefense?.type?<p>Special-Defense {errors.sDefense?.type}  - You need an special-defense between 10 and 100</p>: null}
    </form>
  </>
  )
}

export default Form;

