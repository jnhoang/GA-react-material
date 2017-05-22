import React from 'react';

const FruitFilter = (props) => (
  <div>
    <label htmlFor="fruit-filter">Filter these Fruits: </label>
    <input 
      name="fruit-filter"
      onChange={props.onChange}
      type="text"
      value={props.value}
    />
  </div>
);

export default FruitFilter;