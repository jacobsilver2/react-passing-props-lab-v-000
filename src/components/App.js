import React from 'react';
import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      filters: [],
      currentFilter: null,
      fruit: []
    }
  }

  componentDidMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
    .then(response => response.json())
    .then(fruit => this.setState({ fruit }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {

    return (
      <FruitBasket fruit={this.state.fruit} filters={this.state.filters} selectedFilter={this.state.selectedFilter} onUpdateFilter={this.handleFilterChange} />
    )
  }
}

export default App;
