import React, {Component} from 'react';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null
    };
  }
  componentDidMount() {
    const base = this;

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
      let name = this.state.person.name;
      return(
        <article>
          {name} is the first person in this API!
        </article>
      );
    }
    return (
      <div>Loading...</div>
    );
  }
}

export default Movie;