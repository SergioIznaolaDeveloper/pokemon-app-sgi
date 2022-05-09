import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./Context/Context";
import { ContextTheme } from "./Context/ContextTheme";
import { useState, useEffect } from "react";
import Card from "./Main/Topics/Card/Card";
import "./Styles/Styles.scss";
import axios from "axios";

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

        axios.get(
          `https://pokeapi.co/api/v2/pokemon/${inputText}`
        )
        .then(res => res.data)
        .then(data => {
          includeData(data)
      }
      )


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
      const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=898`);
      const data = await resp.data;
      setPokemons(data);
      } 
      for (let i = myPokemons.length; i < pokemons.results.length; i++) {
        pokemons.results[i].picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
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
        />
      ));
        // gestión del formulario para añadir nuevo pokemon
      const addPokemon = async (data) => {
        const newPokemon = {
          name: data.name,
          type: data.type,
          picture: data.url,
          hp: data.hp,
          attack: data.attack,
          defense: data.defense,
          sAttack: data.sAttack,
          sDefense: data.sDefense,
        }; // seteo el state con user
        setMyPokemons(newPokemon); // seteo el state con noticia
        pokemons.results = [newPokemon, ...pokemons.results]; // seteo el state con noticias
      };
      const testSames = (data) => {
        let equal =  false;
        //comprobar si el  pokemon seleccionado es igual al pokemon reciente
        pokemons.results.map(p => {
        return p.name === data.name ? equal = true : console.log("");
        }) 
        equal === false ? addPokemon(data) : alert(data.name + " already added");
        equal = false;
      }

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
    testSames,
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
}  catch (e) {
  console.log(e);
}
};

export default App;
