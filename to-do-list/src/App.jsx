import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';

class MyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: this.props.toDos
    , newItem: '' 
    };
  }
  handleClear(e) {
    e.preventDefault();
    this.setState({
      toDoList: []
    });
  }
  handleFormInput(e) {
    this.setState({
      newItem: e.target.value
    });
  }
  handleAdd(e) {
    let newToDos = this.state.toDoList;
    newToDos.push(this.state.newItem);
    
    this.setState({
      toDoList: newToDos
    , newItem : ''
    })
    e.preventDefault();
  }
  render() {
    let toDoItems = this.state.toDoList.map( (thing, index) => 
      <ListItem thing={thing} key={index} />
    );
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <input 
          type="text" 
          value={this.state.newItem} 
          onChange={ (e) => this.handleFormInput(e) }
        />
        <button onClick={ (e) => this.handleAdd(e) }>
          Add
        </button>
        <ul>
          {toDoItems}
        </ul>
        <button onClick={ (e) => this.handleClear(e) } >
          Clear List
        </button>
      </div>
    );
  }
}

export default MyList;