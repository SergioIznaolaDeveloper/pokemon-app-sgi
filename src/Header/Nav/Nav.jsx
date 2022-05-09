import React, { Component } from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
      <nav className="nav">
        <Link className="nav__div" to="/">
        POKEMONS
        </Link>
        <br />
        <Link className="nav__div" to="/new">
        NEW
        </Link>
        <Link className="nav__div" to="/search">
        BUSCADOR
        </Link>

      </nav>
    );
}

export default Nav;
