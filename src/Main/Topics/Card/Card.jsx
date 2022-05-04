import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
    render() {
      const { name } = this.props.data;
    return <article className="card">
      <p className="card__name">{name}</p>
      <img className="card__img" src={this.props.foto} alt={name} />
    </article>
  }
}

export default Card;
