import React, { Component } from 'react';

class Hello extends Component {
  render() {
    let animalList = this.props.animals.join(', ');
    
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>Your age is {this.props.age}</p>
        <p>You love: {animalList}</p>
      </div>
    );
  }
}

export default Hello;
