import React, {Component} from 'react';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null
    };
  }
  componentDidMount() {
    fetch('http://swapi.co/api/people/1/')
      .then( (res) => res.json() )
      .then( (json) => {
        console.log(json);
        this.setState({person: json});
      })
      .catch( (err) => console.log('Parsing JSON failed', err) 
    );
  }

  render() {
    if (this.state.person) {
      let person = this.state.person;
      
      return (
        <article>
          <h1>Person</h1>
          <p>Name: {person.name}</p>
          <p>Birth Year: {person.birth_year}</p>
          <p>Height: {person.height}cm</p>
          <p></p>
        </article>
      );
    }

    return (
      <div>Loading...</div>
    );
  }
}

export default Person;