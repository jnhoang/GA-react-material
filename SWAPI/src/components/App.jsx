import React, {Component} from 'react';
import {
  BrowserRouter as Router
, Route
, Link} from 'react-router-dom';

import Home from './Home';
import Person from './Person';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <nav>
              <Link to='/'>Home</Link>&nbsp;
              <Link to='/people'>People</Link> 
            </nav>

            <Route exact path="/" component={Home} />
            <Route path='/people' component={Person} /> 
          </div>
        </Router>
    );
  }
}

export default App;