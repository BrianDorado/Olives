import React, { Component } from 'react';
import CircularProgess from 'material-ui/CircularProgress';
import ProductCards from '../OliveCards/oliveCards';
import { Route, Switch } from 'react-router-dom';
import FilterBar from '../FilterBar/filterBar';
import Details from '../Products/details';
import { connect } from 'react-redux';
import { filterItemsByValue, filterItemsByCustom, filterItemsBySize, addToCart } from '../../../Ducks/Products/Products';
import Header from '../Header/header';
import './store.css';

class Store extends Component {
  state = {
    NumberedDisplay: '',
    category: 0,
    priceMin: 0,
    priceMax: 100,
    beginSlice: 0,
    endSlice: 10
  };

  updateNumberDisplayed = e => {
    this.setState({
      endSlice: e.target.value
    });
  };

  increasePageNumber = () => {
    this.setState({
      beginSlice: this.state.endSlice + 1,
      endSlice: this.state.endSlice + this.state.endSlice
    });
    console.log(this.state.endSlice);
  };
  decreasePageNumber = () => {
    this.setState({});
  };

  setPriceRange = e => {
    this.setState({
      priceMin: 0,
      priceMax: 100
    });
  };

  addItemToCart = e => {
    console.log('added:', e.target)
    // this.props.addItem('added: ', e.target.value)
  }

  render() {
    let { beginSlice, endSlice } = this.state;

    // slicing as local placeholder for pagination

    let products = this.props.items.slice(beginSlice, endSlice).map(item => {
      return (
        <ProductCards
          key={item.id}
          img={item.image}
          name={item.detailed_name}
          price={item.price}
          description={item.description}
          size={item.size}
          quantity={item.qty}
          addToCart={this.addItemToCart}
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
          changeDisplayedNumber={this.updateNumberDisplayed}
          changeCategoryDisplayed={this.changeCategoryDisplayed}
          numberDisplayed={this.endSlice}
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
            <div className="button-container">
              <button onClick={this.increasePageNumber}>Next page</button>
              <button onClick={this.decreasePageNumber}>Previous Page</button>
            </div>
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

export default connect(
  mapStateToProps,
  { filterItemsByValue, filterItemsByCustom, filterItemsBySize, addToCart }
)(Store);
