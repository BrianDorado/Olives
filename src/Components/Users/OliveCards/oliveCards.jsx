import React from 'react';

import lightGreen500 from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

import CategoryImg from '../../../media/images/bottle-2022741_960_720.jpg';
import './oliveCards.css';

const OliveCards = props => {
  let { img, name, description, price, size, addToCart, id, quantity } = props;
  return (
    <div className="item-display">
      <div className="Product-display-container">
        <br />
        <img src={CategoryImg} alt="product" className="Product-img-primary" />
        <section className='product-general-info'>
          <br />
          <h3>Product Name</h3>
          <br />
          <p>{name}</p>
          <br />
          <article className="product-description">{description.slice(0, 30)}<strong>...</strong></article>
          <br />
          <br />
          <p>Price {price.slice(0,3)}</p>
          <br />
          <p>{size} oz</p>
        </section>
        <div className='quantity-alerts' >
        {quantity < 10 && quantity > 0 ? <div className='item-stock-alert'>This item is almost of of stock!</div> : null }
        {quantity === 0 ? <div className='no-stock-alert'> This item is no longer in stock!</div>: null }
        </div>
        <section className="user-card-actions">
          <RaisedButton backgroundColor={lightGreen500} onClick={addToCart}>
            Add to Cart
          </RaisedButton>
          <Link to="/product/details">
            <FlatButton>Details</FlatButton>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default OliveCards;
