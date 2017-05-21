import React, {Component} from 'react';
import FruitFilter from './FruitFilter';
import FruitList from './FruitList';

class FruitContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fruitsToDisplay: props.fruits
    , filterValue: ''
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
  handleFilterChange(e) {
    e.preventDefault();
    const filterValue = e.target.value;
    const filteredFruitList = this.props.fruits.filter( (fruit) =>
      fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
    );

    this.setState({
      fruitsToDisplay: filteredFruitList
    , filterValue
    });
  }
  render() {
    return (
      <div>
        <FruitFilter
          value={this.state.filterValue}
          onChange={this.handleFilterChange}
        />
        <FruitList fruits={this.state.fruitsToDisplay} />
      </div>
    );
  }
}

export default FruitContainer;