import React, { Component } from 'react';
import CircularProgess from 'material-ui/CircularProgress';
import ProductCards from '../OliveCards/oliveCards';
import Grid from 'material-ui/GridList/GridList';
import { Route, Switch } from 'react-router-dom';
import FilterBar from '../FilterBar/filterBar';
import Details from '../Products/details';
import Header from '../Header/header';
import axios from 'axios';
import './store.css';

class Store extends Component {
  state = {
    products: [],
    UserSelectValue: [],
    searchTerm: '',
    userInputValue: '',
    category: 0,
    numberedDisplayed: 10,
    priceMin: 0,
    priceMax: 100
  };

  changeProductsDisplayNumber = e => {
    this.setState({
      numberedDisplayed: e.target.value
    });
  };

  changeCategoryDisplayed = e => {
    this.setState({
      category: e.target.value
    });
    console.log('Category:', this.state.category, e.target);
  };
  defineUserInput = e => {
    this.setState({
      userInputValue: e.target.value
    });
  };

  setPriceRange = e => {
    this.setState({
      priceMin: 0,
      priceMax: 100
    })
  }

  componentDidMount() {
    axios.get('http://localhost:3060/api/products').then(res => {
      this.setState({
        products: res.data
      });
    });
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
        <FilterBar
          changeDisplayedNumber={this.changeProductsDisplayNumber}
          changeCategoryDisplayed={this.changeCategoryDisplayed}
          defineUserInput={this.defineUserInput}
          priceMax={this.state.priceMax}
          priceMin={this.state.priceMin}
          category={this.state.category}
          userInputValue={this.state.userInputValue}
        />
        {this.state.products.length === 0 ? (
          <section className="loading-screen">
            <br />
            <br />
            <br />
            <span>Loading...</span>
            <br />
            <br />
            <br />
            <CircularProgess />
          </section>
        ) : (
          <section className="product-display">
            <Grid>{products}</Grid>
            <Switch>
              <Route path="/c/store/product/details" component={Details} />
            </Switch>
          </section>
        )}
      </div>
    );
  }
}

export default Store;
