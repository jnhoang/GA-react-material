import React, {Component} from 'react';

class Result extends Component {
  render() {
    let person = this.props.person;

    return(
      <article>
        <h1>{person.name}</h1>
        <p>Birth Year: {person.birth_year}</p>
        <p>Height: {person.height}cm</p>
        <p></p>
      </article>
    );
  }
}

export default Result;