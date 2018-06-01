import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import './oliveCards.css'

const CardStyling = {
  height: 350,
  // width: 375,
  // margin: 30
};

const OliveCards = props => {
  return (
    <div className="item-display">
      <Paper style={CardStyling}>
      <br/>
        <img src={props.img} alt="product image" />
        {/* <Link to=``>
          <FlatButton>Details</FlatButton>
        </Link> */}
        <section>
          <br/>
          <h3>Product Name</h3>
          <br/>
          <p>{props.name}</p>
          <br/>
          <p>Price {props.price}</p>
          <br/>
          <p>{props.size} oz</p>
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
