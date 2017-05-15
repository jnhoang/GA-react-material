import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';

var person = {
  personName: 'Nick'
, personAge: 24
, favorites: [
    'capybaras'
  , 'tigers'
  , 'dinosaurs'
  ]
};
ReactDOM.render(
  <Hello 
    name={person.personName} 
    age={person.personAge}
    animals={person.favorites}
  />
, document.getElementById('root')
);
