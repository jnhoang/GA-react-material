import React, {Component} from 'react';
import Result from './Results';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: null
    , input: ''
    };
  }
  handleSubmit() {
    let input = this.state.input;

    fetch('http://swapi.co/api/people/?search=' + input)
      .then( (res) => res.json() )
      .then( (json) => {
        console.log(json.results);
        this.setState({persons: json.results});
      })
      .catch( (err) => console.log('Parsing JSON failed', err) 
    );
  }
  handleFormInput(e) {
    this.setState({
      input: e.target.value
    });
  }
  render() {
    let persons = this.state.persons;

    return (
      <div>
        <input 
          type="text"
          value={this.state.input}
          onChange={ (e) => this.handleFormInput(e) }
        />
        <button onClick={ (e) => this.handleSubmit() }>
          Search
        </button>
        { 
          persons ? 
          persons.map( (person, index) => 
            <Result person={person} key={index} />) 
          : null
        }
      </div>
    );
  }
}

export default Person;