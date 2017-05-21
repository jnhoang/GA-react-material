import React from 'react';
import FruitItem from './FruitItem';

const FruitList = (props) => (
  <ul>
    {props.fruits.map( (fruit, index) =>
      <FruitItem fruit={fruit} key={index} />
    )}
  </ul>
);

export default FruitList;