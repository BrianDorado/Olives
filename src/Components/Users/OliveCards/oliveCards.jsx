import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';

const style = {
  height: 350,
  width: 300,
  margin: 30
};

const OliveCards = props => {
  return (
    <div className="item-display">
      <Paper style={style}>
        <img src={props.img} alt="product display" />
        <Link to="`c/{:props.name}/details/`">
          <FlatButton>Details</FlatButton>
        </Link>
        <section>
          <h3>Product Name</h3>
          <p>{props.name}</p>
          <p>Price {props.price}</p>
          <p>{props.size} oz</p>
        </section>
        <RaisedButton primary={true} onClick={props.addItem}>
          Add to Cart
        </RaisedButton>
      </Paper>
    </div>
  );
};

export default OliveCards;
