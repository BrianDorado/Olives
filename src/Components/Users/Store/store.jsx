import React, { Component } from 'react';
import './store.css';
import axios from 'axios';
import ProductCards from '../OliveCards/oliveCards';

class Store extends Component {
  constructor() {
    super();
    this.state = {
      productArr: null
    };
  }

  componentDidMount() {
    axios.get('/api/products').then(res => {
      this.setState({
        productArr: res.data
      });
    });
  }

  render() {
    let products = this.state.productArr.map(items => {
      return <ProductCards />;
    });
    return (
      <div className="app-store">
        <aside>
          <h2>Filters</h2>
        </aside>
        <section>{products}</section>
      </div>
    );
  }
}

export default Store;
