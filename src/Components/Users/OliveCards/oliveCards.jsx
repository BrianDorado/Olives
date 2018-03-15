import React from 'react';
import Paper from 'material-ui/Paper';
const style = {
  height:350,
  width: 300,
  margin: 40
}

const OliveCards = props => {
  return (
    <div className='item-display' >
      <Paper style={style} zDepth={3}>
        <img src={props.img} alt="product display"/>
        <section>
          <h3>Product Name</h3>
          <p>{props.name}</p>
          <p>Price {props.price}</p>
          <p>{props.size} oz</p>
        </section>
        {/* <button>Add to Cart</button> */}
      </Paper>
    </div>
  );
};

export default OliveCards;
