import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Details from '../Products/details';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import './oliveCards.css';
import lightGreen500 from 'material-ui/styles/colors';
import CategoryImg from '../../../media/images/bottle-2022741_960_720.jpg';

const CardStyling = {
  // height: 500,
  // width: 400,
  margin: 30
};

const OliveCards = props => {
  let { img, name, description, price, size, id } = props;
  return (
    <div className="item-display">
      <Paper style={CardStyling} className="Product-display-container">
        <br />
        <img src={CategoryImg} alt="product" className="Product-img-primary" />
        <section>
          <br />
          <h3>Product Name</h3>
          <br />
          <p>{name}</p>
          <br />
          <article>{description}</article>
          <br/>
          <br/>
          <p>Price {price}</p>
          <br />
          <p>{size} oz</p>
          <br />
        </section>
        <br/>
        <br/>
        <section className="user-actions">
          <RaisedButton backgroundColor={lightGreen500} onClick={props.addItem}>
            Add to Cart
          </RaisedButton>
          <Link to="/c/store/product/details">
            <FlatButton>Details</FlatButton>
          </Link>
        </section>
      </Paper>
    </div>
  );
};

export default OliveCards;
