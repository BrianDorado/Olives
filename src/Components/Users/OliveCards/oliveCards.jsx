import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
// import Paper from 'material-ui/Paper';
import './oliveCards.css';
import lightGreen500 from 'material-ui/styles/colors';
import CategoryImg from '../../../media/images/bottle-2022741_960_720.jpg';

const OliveCards = props => {
  let { img, name, description, price, size } = props;
  return (
    <div className="item-display">
      <div className="Product-display-container">
        <br />
        <img src={CategoryImg} alt="product" className="Product-img-primary" />
        <section>
          <br />
          <h3>Product Name</h3>
          <br />
          <p>{name}</p>
          <br />
          <article className="product-description">{description.slice(0, 30)} ...</article>
          <br />
          <br />
          <p>Price {price}</p>
          <br />
          <p>{size} oz</p>
          <br />
        </section>
        <br />
        <br />
        <section className="user-actions">
          <RaisedButton backgroundColor={lightGreen500} onClick={props.addItem}>
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
