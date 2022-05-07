import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./Context/Context";
import { ContextTheme } from "./Context/ContextTheme";
import { useState, useEffect } from "react";
import Card from "./Main/Topics/Card/Card";
import "./Styles/Styles.scss";

// React functional component
function App() {
  const [them, setTheme] = useState("");
  const [pokemons, setPokemons] = useState([]); // state para almacenar todos los pokemons
  const [pokemon, setPokemon] = useState([]); // state para almacenar el pokemon seleccionado
  const [myPokemons, setMyPokemons] = useState([]); // state para almacenar el pokemon seleccionado
  const [recent,  setRecent] = useState([]); // state para almacenar los pokemons recientes
  const [inputText, setInputText] = useState(""); // state para almacenar el texto del input

  try {
    // todo lo que depende de inputText
    useEffect(() => {
      const includeData = (data) => {
        /// condicionales para reagrupar los pokemons buscados recientemente
        data.name ? (setPokemon(data)) : (paintPokemons());
        data.name 
        ? (recent===""
          ?(setRecent(data)) 
          : (repeted === false
            ?setRecent([data, ...recent,])
            :(console.log(""))))
        : (console.log(""));
      }
      // fetch que depende de inputText
       fetch(
          `https://pokeapi.co/api/v2/pokemon/${inputText}`
        )
        .then(res => res.json())
        .then(data => {
          includeData(data)
      });
      let repeted = false; // variable para determinar si el input existe true or false
      //comprobar si el pokemon seleccionado es igual al pokemon reciente
      const testRecent = () => {
        recent.map(p => {
         return p.name === inputText ? repeted = true : console.log("");
        })}
      setPokemon([]); // vacía el state del ultimo pokemon buscado
      testRecent(); // ejecuta testRecent
      }, [inputText]);
    
    // funcion para fetch todos los pokemons
    const getPokemons = async () => {
      if (pokemons.length === 0) {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=898`);
      const data = await resp.json();
      setPokemons(data);
      }
    };
    getPokemons();

    // funcion para recoger el pokemon seleccionado desde input
    const onChangeInput = async (e) => {
      e.preventDefault();
      setInputText(e.target.value);
    };
    // funcion para pintar el pokemon buscado
    const paintPokemons = () =>
      pokemons.results.map((pok, i) => (
        <Card
          id={i+1}
          data={pok}
          key={i}
          func={setInputText}
          foto={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}
        />
      ));
        // gestión del formulario para añadir nuevo pokemon
      const addPokemon = async (event) => {
        event.preventDefault();
        const name = event.target.name.value; // input del from
        const type = event.target.type.value; // input del from
        const picture = event.target.picture.value; // input del from
        const hp = event.target.hp.value; // input del from
        const attack = event.target.atacck.value; // input del from
        const defense = event.target.defense.value; // input del from
        const sAttack = event.target.sAttack.value; // input del from
        const sDefense = event.target.sDefense.value; // input del from
        const newPokemon = {
          name: name,
          type: type,
          picture: picture,
          hp: hp,
          attack: attack,
          defense: defense,
          sAttack: sAttack,
          sDefense: sDefense,
        }; // seteo el state con user
        setMyPokemons(newPokemon); // seteo el state con noticia
        setPokemons([newPokemon, ...pokemons]); // seteo el state con noticias
      };
  // agrupar datos y funciones para el context
  const dataInfo = {
    pokemon,
    pokemons,
    recent,
    inputText,
    setInputText,
    useEffect,
    paintPokemons,
    onChangeInput,
    addPokemon,
  };
  // agrupar estilos para el context
  const toogleTheme = () => them===""? setTheme("_dark"): setTheme("");
  const dataThem = {
    them,
    toogleTheme: toogleTheme,
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ContextTheme.Provider value={dataThem}>
          <Context.Provider value={dataInfo}>
            <Header />
            <Main />
            <Footer />
          </Context.Provider>
        </ContextTheme.Provider>
      </BrowserRouter>
    </div>
  );
}   catch (e) {
  console.log(e);
}
};

export default App;
