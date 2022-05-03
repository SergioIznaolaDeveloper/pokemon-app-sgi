import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
    render() {
      const { name } = this.props.data;
      console.log(this.props.foto)
    return <article>
      <p>{name}</p>
      <img src={this.props.foto} alt={name} />
    </article>
  }
}

export default Card;
