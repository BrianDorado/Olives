import React, { Component } from 'react';
import CircularProgess from 'material-ui/CircularProgress';
import ProductCards from '../OliveCards/oliveCards';
import { Route, Switch } from 'react-router-dom';
import FilterBar from '../FilterBar/filterBar';
import Details from '../Products/details';
import { connect } from 'react-redux';
import {filterItemsByValue, filterItemsByCustom, filterItemsBySize} from '../../../Ducks/Products/Products'
import Header from '../Header/header';
import './store.css';

class Store extends Component {
  state = {
    NumberedDisplay: '',
    category: 0,
    priceMin: 0,
    priceMax: 100
  };

  updateNumeberDisplayed = () => {};


  setPriceRange = e => {
    this.setState({
      priceMin: 0,
      priceMax: 100
    });
  };

  render() {
   
    let products = this.props.items.slice(this.state.priceMax).map(item => {
      return (
        <ProductCards
          key={item.id}
          img={item.image}
          name={item.detailed_name}
          price={item.price}
          description={item.description}
          size={item.size}
          quantity={item.qty}
          addItem={this.props.addToCart}
        />
      );
    });

    return (
      <div className="app-store">
        <Header />
        <FilterBar
          filterItemsByValue={this.props.filterItemsByValue}
          filterItemsByCustom={this.props.filterItemsByCustom}
          filterItemsBySize={this.props.filterItemsBySize}
          changeDisplayedNumber={this.changeProductsDisplayNumber}
          changeCategoryDisplayed={this.changeCategoryDisplayed}
          priceMax={this.state.priceMax}
          priceMin={this.state.priceMin}
          category={this.state.category}
        />
        {this.props.items.length === 0 ? (
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
          <Route path="/product/details" component={Details} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

export default connect(mapStateToProps, {filterItemsByValue, filterItemsByCustom, filterItemsBySize} )(Store);
