import React, { Component } from 'react';
import './store.css';
import Grid from 'material-ui/GridList';
import axios from 'axios';
import ProductCards from '../OliveCards/oliveCards';
import Header from '../Header/header';
// import CircularProgress from 'material-ui/CircularProgress';



class Store extends Component {
  state = {
    productArr: []
  };

  componentDidMount() {
    axios.get('http://localhost:3060/api/products').then(res => {
      console.log(res.data);
      this.setState({
        productArr: res.data
      });
    });
  }

  render() {
    let products = this.state.productArr.map(item => {
      return (
        <ProductCards
          key={item.id}
          img={item.image}
          name={item.detailed_name}
          price={item.price}
          description={item.description}
          size={item.size}
        />
      );
    });
    return (
      <div className="app-store">
        <Header />
        <aside>
          <h2>Filters</h2>
          <input type="text" />
        </aside>
        {this.state.productArr.length === 0 ? (
          <section>
            <span>Loading...</span>
            {/* <CircularProgess/>  */}
          </section>
        ) : (
          <section className="prodcut-display">
            <Grid xs={40}>{products}</Grid>
          </section>
        )}
      </div>
    );
  }
}

export default Store;
