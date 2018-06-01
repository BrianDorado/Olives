import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Route, Link } from 'react-router-dom';
import Details from '../Products/details';
import Paper from 'material-ui/Paper';
import './oliveCards.css'

const CardStyling = {
  height: 500,
  width: 400,
  margin: 30
};

const OliveCards = props => {
  return (
    <div className="item-display">
      <Paper style={CardStyling}>
      <br/>
        <img src={props.img} alt="product" />
        <Link to={{ pathname: '/prodcuts/details', state: { id: props.id, name: props.name}}} >
          <FlatButton>Details</FlatButton>
        </Link>
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
      <Route path = '/product/details' component={Details}/> 
    </div>
  );
};

export default OliveCards;
