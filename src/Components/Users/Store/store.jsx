import React, { Component } from 'react';
import CircularProgess from 'material-ui/CircularProgress';
import ProductCards from '../OliveCards/oliveCards';
import { Route, Switch } from 'react-router-dom';
import FilterBar from '../FilterBar/filterBar';
import Details from '../Products/details';
import {connect} from 'react-redux'
import Header from '../Header/header';
import './store.css';

class Store extends Component {
  state = {
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

  render() {
    let products = this.props.items.map(item => {
      return (
        <ProductCards
          key={item.id}
          img={item.image}
          name={item.detailed_name}
          price={item.price}
          description={item.description}
          size={item.size}
          addItem={this.props.addToCart}
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
        {this.props.items=== 0 ? (
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
            {products}
            
          </section>
        )}
        <Switch>
          <Route path="product/details" component={Details} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(Store);
