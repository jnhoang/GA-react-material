import React, {Component} from 'react';
import Result from './Results';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null
    , input: ''
    };
  }
  handleSubmit() {
    let input = this.state.input;

    fetch('http://swapi.co/api/people/' + input)
      .then( (res) => res.json() )
      .then( (json) => {
        console.log(json);
        this.setState({person: json});
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
    return (
      <div>
        <input 
          type="number"
          value={this.state.input}
          onChange={ (e) => this.handleFormInput(e) }
        />
        <button onClick={ (e) => this.handleSubmit() }>
          Search
        </button>
        { this.state.person ? <Result person={this.state.person} /> : null}
      </div>
    );
  }
}

export default Person;