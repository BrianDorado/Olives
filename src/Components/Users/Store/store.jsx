import React, { Component } from 'react';
import CircularProgess from 'material-ui/CircularProgress'
import ProductCards from '../OliveCards/oliveCards';
import Grid from 'material-ui/GridList/GridList'
import FilterBar from '../FilterBar/filterBar';
import Header from '../Header/header';
import axios from 'axios';
import './store.css';

class Store extends Component {
  state = {
    products: [],
    category: true,
    searchTerm: '',
    numberedDisplayed: 10
  };

  addToCart = () => {
    console.log('clicked');
  }

  changeProductsdisplaynumber = () => {
    this.setState({
      numberedDisplayed: 0
    })
  }

  componentDidMount() {
    axios.get('http://localhost:3060/api/products').then(res => {
      this.setState({
        products: res.data
      });
      console.log(res.data)
    });
    console.log('Mounted');
  }

  render() {
    let products = this.state.products.map(item => {
      return (
        <ProductCards
          key={item.id}
          img={item.image}
          name={item.detailed_name}
          price={item.price}
          description={item.description}
          size={item.size}
          addItem={this.addToCart}
        />
      );
    });
    return (
      <div className="app-store">
        <Header />
        <FilterBar />
        {this.state.products.length === 0 ? (
          <section className="loading-screen">
            <br />
            <br />
            <br />
            <span>Loading...</span>
            <br/>
            <br/>
            <br/>
            <CircularProgess/> 
          </section>
        ) : (
          <section className="prodcut-display">
            <Grid>{products}</Grid> 
          </section>
        )}
      </div>
    );
  }
}

export default Store;
