import React, { useContext } from "react";
import { ContextTheme } from "../../Context/ContextTheme";
import { Context } from "../../Context/Context";

const HooksUseEffect = () => {
  const {them} = useContext(ContextTheme); //extraer __dark o "" de context
  const secStyle = "sec1"+them; //crear el className en base al context
  const {paintPokemons, inputText} = useContext(Context); //extraer datos y funciones delcontext
  try {
    return (
      <section className={secStyle}>
        <div className="card__content">
       {paintPokemons(inputText)}
       </div>
       </section>
    )
  } catch (e) {
    console.log(e);
  }
};

export default HooksUseEffect;
