import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import Details from '../Products/details';
import Paper from 'material-ui/Paper';
import './oliveCards.css'

const CardStyling = {
  height: 500,
  width: 400,
  margin: 30
};

const OliveCards = props => {
  let {img, name, price, size, id} = props 
  return (
    <div className="item-display">
      <Paper style={CardStyling}>
      <br/>
        <img src={img} alt="product" />
        <Link to='/c/store/product/details' >
          <FlatButton>Details</FlatButton>
        </Link>
        <section>
          <br/>
          <h3>Product Name</h3>
          <br/>
          <p>{name}</p>
          <br/>
          <p>Price {price}</p>
          <br/>
          <p>{size} oz</p>
          <br/>
        </section>
        <RaisedButton primary={true} onClick={props.addItem}>
          Add to Cart
        </RaisedButton>
      </Paper>
    </div>
  );
};

export default OliveCards;
