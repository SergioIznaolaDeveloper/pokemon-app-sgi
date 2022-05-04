import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./Context/Context";
import { ContextTheme } from "./Context/ContextTheme";
import { useState } from "react";
import "./Styles/Styles.scss";

// React functional component
function App() {
  const [user, setUser] = useState(""); // hook useState
  const [them, setTheme] = useState("");

  //Login
  const login = (name) => {
    setUser(name);
  };

  //Logout
  const logout = () => {
    setUser("");
  };

  const dataUser = {
    user,
    login,
    logout,
  };
  const toogleTheme = () => them===""? setTheme("_dark"): setTheme("");
  
  const dataThem = {
    them,
    toogleTheme: toogleTheme,
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ContextTheme.Provider value={dataThem}>
          <Context.Provider value={dataUser}>
            <Header />
            <Main />
            <Footer />
          </Context.Provider>
        </ContextTheme.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
