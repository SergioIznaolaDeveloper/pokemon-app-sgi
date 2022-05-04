import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';

import Topics from "./Topics/Topics";

export class Main extends Component {
  render() {
    return (
      <main>
        <h1>POKEMONS APP</h1>
        <Routes> 
          <Route path="/topics" element={<Topics />} />  
        </Routes>
      </main>
    );
  }
}

export default Main;
