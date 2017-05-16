import React, {Component} from 'react';
import Mordor from './components/Mordor.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Mordor doesFrodoHaveTheOneRing="yeah, he still does" />
        </p>
      </div>
    ); 
  }
}

export default App;