import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <Link className="nav__div" to="/">
          HOME
        </Link>
        <br />
        <Link className="nav__div" to="/topics">
          POKEMONS
        </Link>

      </nav>
    );
  }
}

export default Nav;
