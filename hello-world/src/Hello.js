import React, { Component } from 'react';

class Hello extends Component {
  constructor() {
    super();
    this.state = {
      moodPoints: 1
    }
  }
  increaseMood() {
    this.setState({
      moodPoints: (this.state.moodPoints + 1) % 11
    });
  }

  render() {
    let animalList = this.props.animals.join(', ');
    
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>Your age is {this.props.age}</p>
        <p>You love: {animalList}</p>
        <p>On a scale of 1-10</p>
        <p>You are this happy: {this.state.moodPoints}</p>
        <button 
          onClick={ (e) => this.increaseMood() }
        >
          Cheer up!
        </button>
      </div>
    );
  }
}

export default Hello;
