import React, { Component } from 'react';
import './store.css';
import ProductCards from '../OliveCards/oliveCards';

class Store extends Component {
  constructor() {
    super();
    this.state = {
      productArr: null
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="app-store">
        <aside>
          <h2>Filters</h2>
        </aside>
        <ProductCards />
      </div>
    );
  }
}

export default Store;
