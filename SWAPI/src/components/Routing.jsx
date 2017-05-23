import React from 'react';
import {
  BrowserRouter as Router
, Route
, Link
} from 'react-router-dom';

import Home from './Home';
import Person from './Person';

const Routing = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path='/people' component={Person} /> 
    </div>
  </Router>
);

export default Routing;