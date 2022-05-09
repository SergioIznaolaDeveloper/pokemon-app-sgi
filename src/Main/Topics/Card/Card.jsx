import React, { Component } from "react";
import { Context } from "../../../Context/Context";
import { Link } from "react-router-dom";

class Card extends Component {
  static Context = Context;
  constructor(props) {
    super(props);
    this.state = {}
  }

    render() {
      const { name, picture } = this.props.data;
    return <article className="card">
      <p className="card__name">{name}</p>
      <Link to="/search"><img
      onClick={() => {this.props.func(name)}}
      className="card__img" src={picture} alt={name}/></Link>
    </article>
  }
}
export default Card;
