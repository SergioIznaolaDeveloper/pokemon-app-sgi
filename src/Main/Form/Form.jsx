import React, { useContext,} from "react";
import { Context } from "../../Context/Context";
import { ContextTheme } from "../../Context/ContextTheme";
import { useForm } from "react-hook-form";

function Form() {
  const { testSames } = useContext(Context);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
     const onSubmit = data => {
       testSames(data);
       reset();
      }
  // vacía el state del ultimo pokemon buscado
  // testRecent(repeted); // ejecuta testRecent
  // crear funcion para comprobar si pokemo existe
  const {them} = useContext(ContextTheme); //extraer __dark o "" de context
  const formStyle = "form"+them; //crear el className en base al context

  return (
    <>
    <form className={formStyle} onSubmit={handleSubmit(onSubmit)}> 
    <p>CREATE YOUR OWN POKEMON</p>
    <label className="form__label" htmlFor="name">Name: </label>
    <input {...register("name", { required: true, minLength: 3 })} className="form__input"/>
    <div className="form__two-elements">
    <label className="form__label" htmlFor="type">Type:</label>
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
    </div>
    <label className="form__label" htmlFor="url">Picture: </label>
    <input type="url" value="https://www.axse-shop.de/WebRoot/Store20/Shops/61724364/5F71/C856/918E/5C22/B70E/0A0C/6D10/E426/Y90096.png" {...register("url", { required: true })} className="form__input"   name='url'/>
    <label className="form__label" htmlFor="hp">Hp (10-100): </label>
    <input type="number" {...register("hp", { required: true, min: 10, max: 100 })} className="form__input"  name='hp'/>
    <label className="form__label" htmlFor="attack">Attack (10-100): </label>
    <input type="number" {...register("attack", { required: true, min: 10, max: 100 })} className="form__input"   name='attack'/>
    <label className="form__label" htmlFor="defense">Defense (10-100): </label>
    <input type="number" {...register("defense", { required: true, min: 10, max: 100 })} className="form__input"   name='defense'/>
    <label className="form__label" htmlFor="speed">Speed (10-100): </label>
    <input type="number" {...register("speed", { required: true, min: 10, max: 100 })} className="form__input"   name='speed'/>
    <label className="form__label" htmlFor="sAttack">Spacial Attack (10-150): </label>
    <input type="number" {...register("sAttack", { required: true, min: 10, max: 150 })} className="form__input"   name='sAttack'/>
    <label className="form__label" htmlFor="sDefense">Special Defense (10-150): </label>
    <input type="number" {...register("sDefense", { required: true, min: 10, max: 150 })} className="form__input"   name='sDefense'/>
    <input value="ADD POKEMON" type="submit" className="form__button"/>
    <section className=" form__errors">
    {errors.name?.type?<p>Name is required, min length: 3</p>: null}
    {errors.hp?.type?<p>You need an HP between 10 and 100</p>: null}
    {errors.attack?.type?<p>You need an attack between 10 and 100</p>: null}
    {errors.defense?.type?<p>You need an defense between 10 and 100</p>: null}
    {errors.speed?.type?<p>You need an speed between 10 and 100</p>: null}
    {errors.sAttack?.type?<p>You need an special-attack between 10 and 100</p>: null}
    {errors.sDefense?.type?<p>You need an special-defense between 10 and 100</p>: null}
    </section>
    </form>

  </>
  )
}
export default Form;

